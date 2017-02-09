// load up our dependencies for Gulp
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css');
    
// set some neato variables for use down undah, mate
var appInput = './app/js/**/*.js';
var appOutput = './public/';
var sassInput = './app/scss/**/*.scss';
var sassOutput = './public/';
var nodeModule = './node_modules/';

// quick sass task (with sourcemaps)
gulp.task('sass', function () {
  return gulp
    .src('./app/scss/app.scss')
    .pipe(sass({
      includePaths: [
        nodeModule + 'bootstrap-sass/assets/stylesheets/'
      ]
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassOutput));
});

// pre-deployment sass task for production
gulp.task('buildSass', function(){
  return gulp
    .src('./public/app.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest(sassOutput));
});

// concat all our JS together
gulp.task('scripts', function() {
  return gulp.src([
    nodeModule + 'jquery/dist/jquery.min.js', // get jQuery
    nodeModule + 'bootstrap/dist/bootstrap.min.js', // load bootstrap.js
    nodeModule + 'angular/angular.min.js', // load angular
    appInput
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(appOutput));
});

// uglify the scripts for production
gulp.task('buildJS', function() {
    return gulp
    .src('./public/app.js')
    .pipe(uglify());
});

// define the watch task
gulp.task('watch', function() {
  gulp.watch(appInput, ['scripts']);
  gulp.watch(sassInput, ['sass']);
});

// setup our default task
gulp.task('default', ['sass', 'scripts', 'watch' /*, possible other tasks... */]);

// setup our deploy task
gulp.task('build', ['sass', 'buildSass', 'scripts', 'buildJS' /* other deploy tasks */]);