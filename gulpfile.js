var gulp 	= require('gulp'),
	concat 	= require('gulp-concat'),
	minCss 	= require('gulp-minify-css'),
	watch 	= require('gulp-watch');

// dir
var CssDir = 'dist';

// files
var CssFiles = CssDir + '/flat-pagination.css';

// task
gulp.task('css', function() {
	gulp.src(CssFiles)
		.pipe(minCss({compatibility: 'ie8'}))
		.pipe(concat('flat-pagination.min.css'))
        .pipe(gulp.dest(CssDir));
});

gulp.task('watch', function() {
	gulp.watch(CssFiles, ['css']);
});


gulp.task('default', ['css', 'watch']);
