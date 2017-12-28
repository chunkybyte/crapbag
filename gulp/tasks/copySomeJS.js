var gulp = require('gulp');

gulp.task('copySomeJS', function(){
    return gulp.src(['./app/js/plp-main.js','./app/js/cartFunctions.js'])
        .pipe(gulp.dest('./dist/js'));
});