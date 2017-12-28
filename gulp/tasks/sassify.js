var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sassify',function(){
    return gulp.src('./app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'));
});