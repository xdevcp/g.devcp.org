var gulp = require('gulp');
var image = require('gulp-image');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');

gulp.task('image', function () {
  gulp.src('content/images/**/*')
    .pipe(image({
      pngquant: true,
      optipng: true,
      zopflipng: true,
      advpng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true
    }))
    .pipe(gulp.dest('content/images/'));
});

gulp.task('css', ['js'], function() {
  return gulp.src('./content/themes/casper/assets/css/screen.css')
             .pipe(autoprefixer({
                  browsers: ['last 4 versions'],
                  cascade: false
              }))
             .pipe(cssnano())
             .pipe(gulp.dest('./content/themes/casper/assets/css/'));
});

// 压缩 JS
gulp.task('js', function() {
  return gulp.src('./content/themes/casper/assets/js/*.js')
             .pipe(uglify())
             .pipe(gulp.dest('./content/themes/casper/assets/js/'));
});

gulp.task('default', ['image'], function() {
  console.log("图片已压缩优化完毕！");
});
