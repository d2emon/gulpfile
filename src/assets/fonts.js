// Prepare fonts
gulp.task('fonts', ['bootstrap_fonts'], function(){
  return gulp.src('assets/fonts/*')
    .pipe(gulp.dest('static/fonts'));
});
