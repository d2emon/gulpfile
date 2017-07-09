gulp.task('tether', function(){
  return gulp.src('assets/bower_components/tether/dist/js/tether.min.js')
    .pipe(gulp.dest('static/js'));
});
