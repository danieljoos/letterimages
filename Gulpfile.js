/* jshint esnext:true */

'use strict';

const data = require('gulp-data');
const es = require('event-stream');
const gulp = require('gulp');
const jscs = require('gulp-jscs');
const jshint = require('gulp-jshint');
const path = require('path');
const reduce = require('stream-reduce');
const rename = require('gulp-rename');
const svgo = require('gulp-svgo');
const template = require('gulp-template');
const uglify = require('gulp-uglify');

gulp.task('letterimages.js', () =>
    gulp.src('letterimages.js.tmpl')
        .pipe(data((f, cb) => {
            gulp.src('svg/*.svg')
                .pipe(svgo())
                .pipe(reduce((d, file) => {
                    const k = path.basename(file.path, '.svg');
                    const v = file.contents;
                    d.svgs[k] = v;
                    return d;
                }, { svgs: {} }))
                .on('data', (d) => cb(undefined, d));
        }))
        .pipe(template())
        .pipe(jscs())
        .pipe(jshint())
        .pipe(rename('letterimages.js'))
        .pipe(gulp.dest('dist'))
);

gulp.task('letterimages.min.js', ['letterimages.js'], () =>
    gulp.src('dist/letterimages.js')
        .pipe(uglify())
        .pipe(rename('letterimages.min.js'))
        .pipe(gulp.dest('dist'))
);

gulp.task('default', ['letterimages.js', 'letterimages.min.js']);
