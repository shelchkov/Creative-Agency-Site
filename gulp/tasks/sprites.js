var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	rename = require('gulp-rename');

const config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				scss: {
					template: './gulp/templates/sprite.scss'
				}
			}
		}
	}
}

gulp.task('createSprite', function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('copySpriteGraphic', gulp.series('createSprite', function() {
	return gulp.src('./app/temp/sprite/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'));
}));

gulp.task('copySpriteSASS', function() {
	return gulp.src('./app/temp/sprite/css/*.scss')
		.pipe(rename('_sprite.scss'))
		.pipe(gulp.dest('./app/assets/styles/modules'))
});

gulp.task('icons', gulp.series('copySpriteGraphic', 
	gulp.series('copySpriteSASS')));