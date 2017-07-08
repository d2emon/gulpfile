gulp.task('clean', function() {
  return del.sync(['static', 'templates']);
});
