var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var del = require('del');
var runSequence = require('run-sequence');
var path = require('path');

function exceptionLog (error) {
	console.log(error.toString());
	this.emit('end');
}

// Сборка js
gulp.task('webpack', function() {
	gulp.src('./js/main.js')
		.pipe( webpack(webpackConfig).on('error', exceptionLog) )
		.pipe(gulp.dest('./public/js/'));
});


gulp.task('del-build', function() {
	del([
		'/public/js/build.js',
		'/public/js/build.js.map'
	]);
});

// watcher
gulp.task('default', function () {
	runSequence('del-build', ['webpack'])
	gulp.watch(['./js/**/*.js', './webpack.config.js'], ['webpack']);
});