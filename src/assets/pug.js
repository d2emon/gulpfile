// Prepare pug
gulp.task('txt', function(){
  return gulp.src([
    'assets/templates/**/*.txt',
    '!assets/templates/**/_*.txt'
  ])
    .pipe(gulp.dest('templates/'));
});

gulp.task('html', ['txt'], function(){
  return gulp.src([
    'assets/templates/**/*.pug',
    '!assets/templates/**/_*.pug'
  ])
    .pipe(pug({pretty: true}))
    // .pipe(on("error", console.log))
    .pipe(gulp.dest('templates/'));
});
