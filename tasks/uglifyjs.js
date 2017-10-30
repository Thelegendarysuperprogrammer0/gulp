var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
	gulp.src('build/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js/ugly'))
});