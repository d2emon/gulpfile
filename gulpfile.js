var gulp = require('gulp')
var concat = require('gulp-concat')
var del = require('del')

gulp.task('clean', function() {
  return del.sync(['result']);
});

// Prepare js
gulp.task('compile', function(){
  return gulp.src([
    'src/_init.js',
    'src/clean.js',
    // Libraries
    'src/lib/*.js',
    'src/assets/*.js',
    // Watch & Default
    'src/watch.js',
    'src/default.js'
  ])
    .pipe(concat('gulpfile.js'))
    .pipe(gulp.dest('result'));
});

gulp.task('default', ['compile']);