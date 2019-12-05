require('./gulp/tasks/sass');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');

var gulp = require('gulp'),
	useref = require('gulp-useref');
// var	uglify = require('gulp-uglify'),
// 	gulpIf = require('gulp-if');


gulp.task('useref', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		// // Minifies if it's a JS
		// .pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('dist'))
});