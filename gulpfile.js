const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));  // Provide 'sass' package
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const srcPath = "./src/";

gulp.task('sass', function () {
    return gulp.src(srcPath + 'scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(srcPath + 'css/'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});
