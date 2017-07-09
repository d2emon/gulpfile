gulp.task('chart', function(){
  return gulp.src('assets/bower_components/chart.js/dist/Chart.min.js')
    .pipe(gulp.dest('static/js'));
});
