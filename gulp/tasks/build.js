var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('build', function(){
    runSequence(
        'clear:dist',
        'clearCache',
        'scripts'
    );
});