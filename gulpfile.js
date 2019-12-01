require('./gulp/tasks/sass');

var gulp = require('gulp'),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	gulpIf = require('gulp-if');


gulp.task('useref', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		// // Minifies if it's a JS
		// .pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('dist'))
});