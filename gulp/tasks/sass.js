var gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer');

gulp.task('sass', function() {
	return gulp.src('./app/assets/styles/styles.scss')
		.pipe(sass({ includePaths: "./node_modules"}))
		.on('error', function(error) {
			console.log("There was an error. Try running 'gulp icons'.")
			this.emit('end');
		})
		.pipe(postcss([autoprefixer]))
		.on('error', function(error) {
			console.log(error);
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});