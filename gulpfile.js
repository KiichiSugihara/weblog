var gulp = require('gulp');
var load = require('require-dir');

load('./gulp/tasks', { recurse: true });
gulp.task('default', () => {
  console.log(process.env.NODE_ENV);
});
