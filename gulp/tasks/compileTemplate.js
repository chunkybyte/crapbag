var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var json = require('./data/product-data');

gulp.task('compileTemplate', function(){
    return gulp.src('./app/templates/.hbs')
        .pipe(handlebars(json, {
            ignorePartials: true,
            batch: ['./app/templates']
        }))
        .pipe(rename('demo.html'))
        .pipe(gulp.dest('./dist'));
});