gulp.task('fa:css', function(){
  return gulp.src('assets/bower_components/components-font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('static/css'));
});

gulp.task('fa:fonts', function(){
  return gulp.src('assets/bower_components/components-font-awesome/fonts/*')
    .pipe(gulp.dest('static/fonts'));
});

