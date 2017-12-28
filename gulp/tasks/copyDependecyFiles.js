var gulp = require("gulp");

gulp.task('copyFonts', function() {
    return gulp.src(['./app/fonts/*.woff2', './node_modules/bootstrap/fonts/*.+(eot|svg|ttf|woff|woff2)'])
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copyData', function(){
    return gulp.src('./app/data/*.json')
    .pipe(gulp.dest('./dist/data'));
});

gulp.task('copyDependecyFiles', [
    'copyData',
    'copyFonts'
]);