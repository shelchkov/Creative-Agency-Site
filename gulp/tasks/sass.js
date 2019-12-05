var gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer');

gulp.task('sass', function() {
	return gulp.src('./app/assets/styles/styles.scss')
		.pipe(sass({ includePaths: "./node_modules"}))
		.pipe(postcss([autoprefixer]))
		.on('error', function(error) {
			console.log(error);
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});