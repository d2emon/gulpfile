gulp.task('pace', function(){
  return gulp.src('assets/bower_components/PACE/pace.min.js')
    .pipe(gulp.dest('static/js'));
});
