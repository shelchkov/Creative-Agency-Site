var gulp = require('gulp'),
	useref = require('gulp-useref');
// var	uglify = require('gulp-uglify'),
// 	gulpIf = require('gulp-if');

gulp.task('useref', function() {
	return gulp.src('app/*.html')
		.pipe(useref())
		// // Minifies if it's a JS
		// .pipe(gulpIf('*.js', uglify()))
		.pipe(gulp.dest('dist'));
});

gulp.task('moveImages', function() {
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(gulp.dest('dist/assets/images'));
})

gulp.task('dist', gulp.series('useref', gulp.series('moveImages')));