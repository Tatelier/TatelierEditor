const gulp = require("gulp");

const typescript = require("gulp-typescript");
const pug = require("gulp-pug");
const sass = require('gulp-sass');
const hjson = require('gulp-hjson');

gulp.task('compile:ts', () => {
    return gulp.src("src/**/*.ts").pipe(typescript()).js.pipe(gulp.dest('dist'));
});

gulp.task('compile:hjson', () => {
    return gulp.src("src/**/*.hjson").pipe(hjson()).pipe(gulp.dest('dist'));
});

gulp.task('compile:pug', () => {
    return gulp.src("src/**/*.pug").pipe(pug()).pipe(gulp.dest('dist'));
});

gulp.task('compile:sass', () => {
    return gulp.src("src/**/*.scss").pipe(sass()).pipe(gulp.dest('dist'));
});

gulp.task('compile', gulp.series(gulp.parallel('compile:ts', 'compile:hjson', 'compile:pug', 'compile:sass')));

