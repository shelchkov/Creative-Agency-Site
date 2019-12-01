var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('./app/scss/**/*.scss')
		.pipe(sass({ includePaths: "./node_modules"}))
		.pipe(gulp.dest('./app/css'))
});