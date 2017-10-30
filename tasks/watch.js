var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

var sassloc = 'sass/**/*.scss';

gulp.task('watch', ['browserSync', 'sass'], function (){
	gulp.watch('build/sass/**/*.scss', ['sass']);
	gulp.watch('build/*.html', browserSync.reload);
	gulp.watch('build/js/**/*.js', browserSync.reload);
});