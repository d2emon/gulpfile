gulp.task('bootstrap:css', function(){
  return gulp.src([
    'assets/bower_components/bootstrap/dist/css/bootstrap.min.css',
    'assets/bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
  ])
    .pipe(gulp.dest('static/css'));
});

gulp.task('bootstrap:js', function(){
  return gulp.src('assets/bower_components/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('static/js'));
});

gulp.task('bootstrap:fonts', function(){
  return gulp.src('assets/bower_components/bootstrap/dist/fonts/*')
    .pipe(gulp.dest('static/fonts'));
});
