gulp.task('favicon', function(){
  return gulp.src('assets/favicon/*')
    .pipe(gulp.dest('static/favicon'));
});
