var gulp = require('gulp');
var sass = require('gulp-sass');
var angularModules = require("gulp-angular-modules");
var inject = require('gulp-inject');

gulp.task('styles', function() {
    gulp.src('assets/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'))
});

//Watch task
gulp.task('watchsass',function() {
    gulp.watch('assets/css/*.scss',['styles']);
});


gulp.task("angular-modules", function() {
 
    var options = {
        name: "gulp-angular-modules", // The name of the module to use in your main Angular.js 
        modules: ['LocalStorageModule'] // Any extra modules that you want to include. 
    };
 
    return gulp.src(["app/src/**/*.js", "!app/src/templates/*"])
        .pipe(angularModules("gulp-angular-modules.js", options)) // Name of the file generated 
        .pipe(gulp.dest("app/src/init/")) // Destination folder 
});
