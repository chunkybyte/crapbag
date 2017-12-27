// Run once and that is enough
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('scripts', function(){
    runSequence(  
        'sassify',
        'optimizeImages',
        'copyFonts',
        'dataCopy',
        'handleTemplate',
        'useref'
    );
});