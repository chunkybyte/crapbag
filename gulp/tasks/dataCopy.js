var gulp = require('gulp');

gulp.task('dataCopy', function(){
    return gulp.src('./app/data/*.json')
        .pipe(gulp.dest('./dist/data'));
});