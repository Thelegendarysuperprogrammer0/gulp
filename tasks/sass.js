var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

var sassloc = 'sass/**/*.scss';
var cssloc = 'styles/css/';

gulp.task('sass', function(){
	gulp.src(sassloc)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(cssloc))
		.pipe(browserSync.reload({
			stream: true
		}))
});