var gulp = require('gulp');
var browserSync = require('./browserSync');

// var reload = browserSync.reload();
// var requireDir = require('require-dir');

console.log("Watching your files for changes... I got you bro!");

gulp.task('watch', ['browserSync','sassify'], function(){
    gulp.watch('./app/scss/**/*.scss',['sassify']);
    // Adding the watch support for the HTML and JS files
    gulp.watch('./app/*.html',['browserSync']);
    gulp.watch('./app/js/**/*.js',['browserSync']);
});
// This way the browserSync and the sassify tasks will run concurrently before the watch task