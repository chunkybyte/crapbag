var gulp = require("gulp");
var concat = require("gulp-concat");
var pump = require("pump");
var uglify = require("gulp-uglify");
var path = require('path');
var browserSync = require("browser-sync");

var bs = browserSync.create();
var SCRIPTS_COMMON_LOCATION = path.join(path.resolve("./app"), "js");
var VENDOR_SCRIPTS_COMMON_LOCATION = path.resolve('./node_modules');

var scriptsConcat = function(src, file, dest) {
    pump([
        gulp.src(src),
        concat(file),
        uglify(),
        gulp.dest(dest),
        bs.stream()
    ]);
};

gulp.task("generateCustomBundle", function() {
    scriptsConcat(
        [
            path.join(SCRIPTS_COMMON_LOCATION, "constants.js"),
            path.join(SCRIPTS_COMMON_LOCATION, "dataService.js"),
            path.join(SCRIPTS_COMMON_LOCATION, "internationalization.js"),
            path.join(SCRIPTS_COMMON_LOCATION, "cartFunctions.js"),
            path.join(SCRIPTS_COMMON_LOCATION, "plp-main.js")
        ],
        "custom.min.js",
        path.join(path.resolve("./dist"), "js")
    );
});

gulp.task("generateVendorBundle", function() {
    scriptsConcat(
        [
            path.join(VENDOR_SCRIPTS_COMMON_LOCATION, "jquery", "dist", "jquery.min.js"),
            path.join(VENDOR_SCRIPTS_COMMON_LOCATION, "handlebars", "dist", "handlebars.min.js"),
            path.join(VENDOR_SCRIPTS_COMMON_LOCATION, "bootstrap", "dist", "js", "bootstrap.min.js"),
            path.join(SCRIPTS_COMMON_LOCATION, "fontawesome-all.min.js"),
            path.join(SCRIPTS_COMMON_LOCATION, "jquery.i18n.js")
        ],
        "vendor.min.js",
        path.join(path.resolve("./dist"), "js")
    );
});

gulp.task('scripts', [
    'generateCustomBundle',
    'generateVendorBundle'
]);