var gulp = require('gulp')
var webpack = require('webpack')
var webpackStream = require('webpack-stream')

var config = require('./webpack.config.js')

gulp.task('default', () => {
  return gulp.src('src/js/app.js')
    .pipe(webpackStream(config, webpack))
    .pipe(gulp.dest('dist/js'))
})


