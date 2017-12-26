var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('optimizeImages', function(){
    return gulp.src('./app/images/**/*.+(png|jpg|svg|gif|jpeg])')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('./dist/images'));
});