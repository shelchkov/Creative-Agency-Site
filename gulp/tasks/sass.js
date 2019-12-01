var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('./app/scss/**/*.scss')
		.pipe(sass({ includePaths: "./node_modules"}))
		.on('error', function(error) {
			console.log(error);
			this.emit('end');
		})
		.pipe(gulp.dest('./app/css'))
});