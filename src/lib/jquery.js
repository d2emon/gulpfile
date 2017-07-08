gulp.task('jquery', function(){
  return gulp.src('assets/bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('static/js'));
});
