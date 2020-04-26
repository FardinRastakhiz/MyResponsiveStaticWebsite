var gulp = require('gulp');
var postcss = require('gulp-postcss');

let configs = require('./src/js/configs');

gulp.task('css', function() {
    var processors = configs;

    return gulp.src('./src/*.css')
        .pipe( postcss(processors) )
        .pipe( gulp.dest('./dist/css'));
});

gulp.task('default', function() {
    gulp.watch('./src/*.css', gulp.series('css'));
});
