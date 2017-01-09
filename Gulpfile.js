/* jshint esnext:true */

'use strict';

const cheerio = require('cheerio');
const cssmin = require('gulp-cssmin');
const es = require('event-stream');
const gulp = require('gulp');
const jscs = require('gulp-jscs');
const jshint = require('gulp-jshint');
const lodash = require('lodash');
const material = require('material-colors');
const path = require('path');
const reduce = require('stream-reduce');
const rename = require('gulp-rename');
const svgo = require('gulp-svgo');
const template = require('gulp-template');
const uglify = require('gulp-uglify');

const demoData = {
    names: [
        'John Doe', 'Tommy Atkins', 'Max Mustermann', 'John Smith',
        'Numerius Negidius', 'Ola Nordmann', 'Yogi Bear',
        'Ivan Petrovich Sidorov', 'Sven Svensson', 'Zhang San',
        'Anna Malli', 'Rajwinder Kaur',]
};
let templateData = { svgs: {}, colors: material };

gulp.task('templateData', () =>
    gulp.src('svg/*.svg')
        .pipe(svgo())
        .pipe(reduce((d, file) => {
            const k = path.basename(file.path, '.svg');
            const v = file.contents;
            d.svgs[k] = v;
            return d;
        }, templateData))
        .on('data', (d) => templateData = d)
);

gulp.task('letterimages.js', ['templateData'], () =>
    gulp.src('letterimages.js.tmpl')
        .pipe(template(templateData))
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(rename('letterimages.js'))
        .pipe(gulp.dest('dist'))
);

gulp.task('letterimages.min.js', ['letterimages.js'], () =>
    gulp.src('dist/letterimages.js')
        .pipe(uglify())
        .pipe(rename('letterimages.min.js'))
        .pipe(gulp.dest('dist'))
);

gulp.task('letterimages.css', ['templateData'], () =>
    gulp.src('letterimages.css.tmpl')
        .pipe(template(templateData, { imports: { _: lodash, cheerio: cheerio } }))
        .pipe(rename('letterimages.css'))
        .pipe(gulp.dest('dist'))
);

gulp.task('letterimages.min.css', ['letterimages.css'], () =>
    gulp.src('dist/letterimages.css')
        .pipe(cssmin())
        .pipe(rename('letterimages.min.css'))
        .pipe(gulp.dest('dist'))
);

gulp.task('demo.html', ['letterimages.min.js'], () =>
    gulp.src('demo.html.tmpl')
        .pipe(template(demoData))
        .pipe(rename('demo.html'))
        .pipe(gulp.dest('dist'))
);

gulp.task('demo-css.html', ['letterimages.min.css'], () =>
    gulp.src('demo-css.html.tmpl')
        .pipe(template(demoData))
        .pipe(rename('demo-css.html'))
        .pipe(gulp.dest('dist'))
);

gulp.task('default', [
    'letterimages.js', 'letterimages.min.js',
    'letterimages.css', 'letterimages.min.css',
    'demo.html', 'demo-css.html']);
