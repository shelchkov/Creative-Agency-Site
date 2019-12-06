var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	del = require('del');

const config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				sass: {
					template: './gulp/templates/sprite.scss'
				}
			}
		}
	}
}

gulp.task('beginClean', function() {
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', gulp.series('beginClean', function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite'));
}));

gulp.task('copySpriteGraphic', gulp.series('createSprite', function() {
	return gulp.src('./app/temp/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
}));

gulp.task('endClean', function() {
	return del('./app/temp/sprite');
});

gulp.task('icons', gulp.series('copySpriteGraphic', gulp.series('endClean')));