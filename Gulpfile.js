/* jshint esnext:true */

'use strict';

const cheerio = require('cheerio');
const cssmin = require('gulp-cssmin');
const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const material = require('material-colors');
const path = require('path');
const rename = require('gulp-rename');
const template = require('gulp-template');
const through2 = require('through2');
const uglify = require('gulp-uglify');

const demoData = {
    names: [
        'John Doe', 'Tommy Atkins', 'Max Mustermann', 'John Smith',
        'Numerius Negidius', 'Ola Nordmann', 'Yogi Bear',
        'Ivan Petrovich Sidorov', 'Sven Svensson', 'Zhang San',
        'Anna Malli', 'Rajwinder Kaur',]
};

let templateData = { glyphs: {}, colors: material };

gulp.task('font', () =>
    gulp.src('svg/*.svg')
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
            timestamp: Math.round(Date.now() / 1000)
        }))
        .on('glyphs', (glyphs) =>
            Object.keys(templateData.glyphs).forEach((k) =>
                templateData.glyphs[k].unicodes = [0, 1].map((i) =>
                    glyphs.find((glyph) => glyph.name === k + i).unicode[0])))
        .pipe(gulp.dest('dist/fonts/'))
);

gulp.task('letterimages.css', ['font'], () =>
    gulp.src('letterimages.css.tmpl')
        .pipe(template(templateData))
        .pipe(rename('letterimages.css'))
        .pipe(gulp.dest('dist/css/'))
);

gulp.task('letterimages.min.css', ['letterimages.css'], () =>
    gulp.src('dist/css/letterimages.css')
        .pipe(cssmin())
        .pipe(rename('letterimages.min.css'))
        .pipe(gulp.dest('dist/css/'))
);

gulp.task('demo-css.html', ['letterimages.min.css'], () =>
    gulp.src('demo-css.html.tmpl')
        .pipe(template(demoData))
        .pipe(rename('demo-css.html'))
        .pipe(gulp.dest('dist'))
);

gulp.task('letterimages.js', () => 
    gulp.src('letterimages.js')
        .pipe(gulp.dest('dist/js/'))
);

gulp.task('letterimages.min.js', ['letterimages.js'], () =>
    gulp.src('dist/js/letterimages.js')
        .pipe(uglify())
        .pipe(rename('letterimages.min.js'))
        .pipe(gulp.dest('dist/js/'))
);

gulp.task('demo-js.html', ['letterimages.min.js', 'letterimages.min.css'], () =>
    gulp.src('demo-js.html.tmpl')
        .pipe(template(demoData))
        .pipe(rename('demo-js.html'))
        .pipe(gulp.dest('dist'))
);

gulp.task('default', [
    'letterimages.css', 'letterimages.min.css', 'demo-css.html',
    'letterimages.js', 'letterimages.min.js', 'demo-js.html'
]);
