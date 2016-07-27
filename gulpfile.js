'use strict';

const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const minifyCSS = require('gulp-clean-css');
const del = require('del');
const shell = require('gulp-shell');

/**
 * Production css file
 * @type {String}
 */
const CSS_DIST = 'main.min.css';
/**
 * Production js file
 * @type {String}
 */
const JS_DIST = 'main.min.js';
/**
 * Production folder
 * @type {String}
 */
const DIST_FOLDER = './dist/';

// Concat js files and uglify/minify them
gulp.task('scripts', function() {
  gulp.src(['./js/**/*.js'])
    .pipe(concat(JS_DIST))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest(DIST_FOLDER));
});

// Remove all js files from the production folder
gulp.task('clean-js', function() {
  del([`${DIST_FOLDER}*.js`, ]).then(paths => {
    paths.length && console.log('Removed:\n', paths.join('\n'));
  });
});

// Remove all css files from the production folder
gulp.task('clean-css', function() {
  // Your code here
});


gulp.task('build', ['clean-js', 'scripts']);

gulp.task('deploy', ['build']);
