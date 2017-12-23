var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp/tasks');

gulp.task('default',[
    'build',
    'watch'
]);

// List of Gulp Tasks Created Here : 

// sassify : To compile 'sass' files into 'css' in the css folder
// watch : Continously watches the sass files to run the task sassify whenever there is a new change saved to the sass
// browserSync : For Live Reloading the browser whenever theres a new change made
// scripts has 2 tasks - useref : Compiles the custom js into a minified file is distribution AND optimizeImages : optimize your images