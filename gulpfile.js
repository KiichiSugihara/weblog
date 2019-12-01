var config = require('./gulp/config.js');
var gulp = require('gulp');
var load = require('require-dir');

load('./gulp/tasks', { recurse: true });

var development = [
  'copy-third_party',
  'copy-images',
  'copy-javascripts',
  'compile-sass'
];

var production = [
  'copy-third_party',
  'copy-images',
  'minify-javascripts',
  'compile-sass'
];

gulp.task('default', config.env.IS_DEVELOPMENT ? development : production);
