var gulp = require('gulp'),
	useref = require('gulp-useref');
// var	uglify = require('gulp-uglify'),
// 	gulpIf = require('gulp-if');


gulp.task('dist', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		// // Minifies if it's a JS
		// .pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('dist'))
});