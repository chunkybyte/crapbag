var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

gulp.task('useref', function(){
    return gulp.src('./app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))//Minifying only if its a JS file
        .pipe(gulpIf('*.css', cssnano()))//Minifying only if its a CSS file        
        .pipe(gulp.dest('./dist'));
});