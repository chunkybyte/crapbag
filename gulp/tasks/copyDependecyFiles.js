var gulp = require("gulp");

gulp.task('copyFonts', function() {
    return gulp.src(['./app/fonts/*.woff2', './node_modules/bootstrap/fonts/*.+(eot|svg|ttf|woff|woff2)'])
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copyData', function() {
    return gulp.src('./app/data/*.json')
        .pipe(gulp.dest('./dist/data'));
});

gulp.task('copyi18n', function() {
    return gulp.src('./app/i18n/**/*')
        .pipe(gulp.dest('./dist/i18n'));
});

gulp.task('copyDependecyFiles', [
    'copyData',
    'copyFonts',
    'copyi18n'
]);