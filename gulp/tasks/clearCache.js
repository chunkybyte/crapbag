var gulp = require('gulp');
var cache = require('gulp-cache');

gulp.task('clearCache',function(){
    cache.clearAll();
});