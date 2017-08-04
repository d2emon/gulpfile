// Prepare fonts
gulp.task('fonts', ['bootstrap:fonts', 'fa:fonts'], function(){
  return gulp.src('assets/fonts/*')
    .pipe(gulp.dest('static/fonts'));
});
