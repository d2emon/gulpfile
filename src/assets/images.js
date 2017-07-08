gulp.task('img', function(){
  return gulp.src('assets/img/*')
    .pipe(gulp.dest('static/img'));
});

//Prepare images
gulp.task('images', ['img'], function(){
return gulp.src('assets/images/*')
 .pipe(gulp.dest('static/images'));
});
