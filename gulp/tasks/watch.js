var gulp = require('gulp'),
	watch = require('gulp-watch');

gulp.task('watch', function() {
	watch('./app/scss/**/*.scss', function() {
		gulp.start('sass');
	});
});
