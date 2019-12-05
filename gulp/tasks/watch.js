var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.scss', gulp.series('cssInject', 
		function() {}));
});

gulp.task('cssInject', gulp.series('sass', function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
}));