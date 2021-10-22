


// sudo npm install gulp-csso gulp-concat vinyl-ftp gulp-util gulp-rename gulp-sass gulp-uglify --save-dev

var cssMinify = require('gulp-csso');
var concat = require('gulp-concat');
var gulp = require('gulp');
var rename = require('gulp-rename');
// var sass                = require('gulp-sass')(require('node-sass'));
// var sass = require('gulp-sass')(require('sass'));
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');



var assets = 'www/assets/';



gulp.task('css', function () {
	return gulp.src(assets + 'styles.scss')
		.pipe(sass())
		.pipe(cssMinify())
		.pipe(rename({
			basename: 'theme',
			// extname: 'liquid',
			// suffix: ".min"
		}))
		.pipe(gulp.dest(assets));
});

gulp.task('js', function () {
	return gulp.src([
		// localFolderJs + 'jquery.3.2.1.js',
		assets + 'owl.carousel.js',
		assets + '**/*.js'
	])
		.pipe(concat('theme.js'))
		// .pipe(uglify())
		.pipe(rename({
			// suffix: ".min"
		}))
		.pipe(assets);
});

gulp.task('watch', function () {
	gulp.watch(assets + '**/*.scss', gulp.series('css'));
	gulp.watch(assets + '**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series(
	'watch'
));


