var gulp = require('gulp');
var del = require('del');

gulp.task('clear:dist', function(){
    return del.sync('dist');
});