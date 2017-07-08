// Prepare css
gulp.task('less', function(){
  return gulp.src('assets/less/*.less')
    .pipe(less())
    .pipe(concat('index.css'))
    // .pipe(csso())
    .pipe(gulp.dest('static/css'));
});

gulp.task('css', ['bootstrap_css', 'less'], function(){
  return gulp.src('assets/css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('static/css'));
});
