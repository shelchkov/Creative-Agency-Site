var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite');

const config = {
	mode: {
		css: {
			sprite: 'sprite.svg'
		}
	}
}

gulp.task('createSprite', function() {
	return gulp.src('./app/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite'));
});