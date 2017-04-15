const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug  = require('gulp-pug');

gulp.task('views', function() {
  gulp.src('src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['views']);