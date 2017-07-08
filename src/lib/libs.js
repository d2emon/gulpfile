gulp.task('tether', function(){
  return gulp.src('assets/bower_components/tether/dist/js/tether.min.js')
    .pipe(gulp.dest('static/js'));
});

gulp.task('pace', function(){
  return gulp.src('assets/bower_components/PACE/pace.min.js')
    .pipe(gulp.dest('static/js'));
});

gulp.task('chart', function(){
  return gulp.src('assets/bower_components/chart.js/dist/Chart.min.js')
    .pipe(gulp.dest('static/js'));
});
