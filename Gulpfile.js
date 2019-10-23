/*
 * Letter Images - Fallback Profile Images
 * https://github.com/danieljoos/letterimages
 */

'use strict';

const cheerio = require('cheerio');
const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const material = require('material-colors');
const path = require('path');
const puppeteer = require('puppeteer');
const rename = require('gulp-rename');
const template = require('gulp-template');
const through2 = require('through2');

const templateData = { glyphs: {}, colors: material };

function font() {
    return gulp.src('svg/*.svg')
        .pipe(through2.obj(function (file, enc, done) {
            const extname = path.extname(file.path);
            const basename = path.basename(file.path, extname);
            const dirname = path.dirname(file.path);
            ['color2', 'color3'].forEach((c, i) => {
                let $ = cheerio.load(file.contents);
                $('path').remove(':not(.' + c + ')');
                let f = file.clone();
                f.contents = Buffer.from($.xml());
                f.path = path.join(dirname, basename + i + extname);
                this.push(f);
            });
            templateData.glyphs[basename] = {};
            done();
        }))
        .pipe(iconfont({
            fontName: 'letterimages',
            prependUnicode: false,
            formats: ['woff', 'svg'],
            timestamp: Math.round(Date.now() / 1000),
            metadata: 'https://github.com/danieljoos/letterimages',
            fontHeight: 1000,
            normalize: true,
        }))
        .on('glyphs', (glyphs) =>
            Object.keys(templateData.glyphs).forEach((k) =>
                templateData.glyphs[k].unicodes = [0, 1].map((i) =>
                    glyphs.find((glyph) => glyph.name === k + i).unicode[0])))
        .pipe(gulp.dest('dist/'));
}

function css() {
    return gulp.src('templates/letterimages.css.tmpl')
        .pipe(template(templateData))
        .pipe(rename('letterimages.css'))
        .pipe(gulp.dest('dist/'))
}

function js() {
    return gulp.src('js/*.js')
        .pipe(gulp.dest('dist/'));
}

function demo() {
    const demoData = { names: [] };
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); ++i) {
        demoData.names.push(String.fromCharCode(i));
    }
    return gulp.src('templates/demo.html.tmpl')
        .pipe(template(demoData))
        .pipe(rename('demo.html'))
        .pipe(gulp.dest('.'));
}

async function preview() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file:///${__dirname}/demo.html`);
    const previewArea = await page.$('#preview');
    await previewArea.screenshot({ path: 'preview.png', omitBackground: true });
    await browser.close();
}

exports.font = font;
exports.css = gulp.series(font, css);
exports.js = js;
exports.demo = demo;
exports.preview = gulp.series(demo, preview);
exports.default = gulp.series(exports.css, exports.js, exports.preview);
