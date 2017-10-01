//Prepare images
gulp.task('images', function(){
return gulp.src([
    'assets/img/*',
    'assets/img/**/*',
    'assets/images/*',
    'assets/images/**/*',
  ])
    .pipe(gulp.dest('static/images'));
});
