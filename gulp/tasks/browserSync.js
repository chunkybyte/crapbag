var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync',function(){
    browserSync.init({
        server:{
            baseDir : './dist'
        }
    }, function(){
        console.log("Successful Reload : Reloading...");    
        browserSync.reload();
    });
});

module.exports = browserSync;