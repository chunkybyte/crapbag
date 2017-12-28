var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
 
gulp.task('handleTemplate', function(){
  gulp.src('./app/templates/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'CrapbagPLP.templates',
      noRedeclare: true 
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('dist/js/'));
});