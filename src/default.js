gulp.task('bootstrap', ['bootstrap:css', 'bootstrap:js', 'bootstrap:fonts']);
gulp.task('dropzone', ['dropzone_css', 'dropzone_js']);
gulp.task('fa', ['fa:css', 'fa:fonts']);
gulp.task('default', ['clean', 'favicon', 'fonts', 'html', 'css', 'js', 'images']);
