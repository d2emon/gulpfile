gulp.task('bootstrap', ['bootstrap_css', 'bootstrap_js', 'bootstrap_fonts']);
gulp.task('dropzone', ['dropzone_css', 'dropzone_js']);
gulp.task('default', ['clean', 'favicon', 'fonts', 'html', 'css', 'js', 'images']);