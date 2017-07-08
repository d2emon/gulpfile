// Prepare js
gulp.task('js', ['jquery', 'bootstrap_js', 'tether', 'pace', 'chart'], function(){
  return gulp.src([
    'assets/js/**/*.js',
    '!assets/js/views/*.js'
  ])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('static/js'));
});
