// gulp
var gulp = require('gulp');

// plugins
var browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app",
            // The key is the url to match
            // The value is which folder to serve (relative to your current working directory)
            routes: {
                "/bower_components": "bower_components",
                "/node_modules": "node_modules"
            }
        },
        browser:"chrome"
    });
});

// Default task
gulp.task('default', ['browser-sync'], function(){
    gulp.watch("app/**/*.*").on('change', browserSync.reload);
});