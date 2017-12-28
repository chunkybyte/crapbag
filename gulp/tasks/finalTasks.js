var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('finalTasks', function(){
    runSequence(  
        'sassify',
        'optimizeImages',
        'copyDependecyFiles',
        'handleTemplate',
        'useref'
    );
});