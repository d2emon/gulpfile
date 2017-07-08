// Watch for changes
gulp.task('watch', ['css', 'html', 'js', 'fonts', 'images'], function() {
  gulp.watch('assets/less/*.less', ['css']);
  gulp.watch('assets/templates/**/*.pug', ['html']);
  gulp.watch('assets/fonts/*', ['fonts']);
  gulp.watch('assets/js/**/*.js', ['js']);
  gulp.watch('assets/images/*', ['images']);
});
