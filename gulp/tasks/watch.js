var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/scss/**/*.scss', gulp.series('cssInject', function() {
		
	}));
});

gulp.task('cssInject', gulp.series('sass', function() {
	return gulp.src('./app/css/styles.css')
		.pipe(browserSync.stream());
}));