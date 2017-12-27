var gulp = require('gulp');
var sass = require('gulp-sass');
// var browserSync = require('./browserSync');

gulp.task('sassify',function(){
    return gulp.src('./app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'));
    // .pipe(browserSync.reload({
    //     stream : true
    // }));
});