var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('default', ['copy'], function() {

});

gulp.task('copy', function() {
    return gulp.src(['lib/**', 'package.json']).pipe(gulp.dest('node_modules/ngx-formly-components'));
});

// gulp.task('lib', function () {
// 	return gulp.src(['src/**/*.js', 'src/**/*.js.map', 'src/**/*.metadata.json', 'src/**/*.d.ts']).pipe(gulp.dest('lib/dist'));
// });

// gulp.task('lib.node_modules', ['lib'], function () {
// 	return gulp.src(['lib/**/*'], { base: "lib" }).pipe(gulp.dest('node_modules/ngx-formly-components/lib'));
// });

// gulp.task('lib.node_modules.package.json', function () {
// 	return gulp.src(['package.json']).pipe(gulp.dest('node_modules/ngx-formly-components'));
// });