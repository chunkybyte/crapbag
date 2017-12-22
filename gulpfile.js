var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('helloWorld', function() {
    console.log("Hello World! - Gulp");
});

gulp.task('sassify', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    });
});

// gulp.watch('app/scss/**/*.scss', ['sass']);

// Watch Task
gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', ['sassify']);
});


// List of Gulp Tasks Created Here : 

// 1. helloWorld : To console log the message "Hello World"
// 2. sassify : To compile 'sass' files into 'css' in the css folder
// 3. watch : Continously watches the sass files to run the task sassify whenever there is a new change saved to the sass
// 4. browserSync : For Live Reloading the browser whenever theres a new change made