// load up our dependencies for Gulp
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css');
    
// set some neato variables for use down undah, mate
var appOutput = './public/';
var scriptInput = './app/js/**/*.js';
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

// define the browserify stuff
gulp.task('browserify', function() {
  // Grabs the app.js file
  return browserify('./app/js/app.js')
    .bundle() // bundle it
    .pipe(source('app.js')) // put the bundle to vinyl
    .pipe(gulp.dest('./public/')); // shove it in the app hole
});

// uglify the scripts for production
gulp.task('buildJS', function() {
    return gulp
    .src('./public/app.js')
    .pipe(uglify());
});

// define the watch task
gulp.task('watch', function() {
  gulp.watch(scriptInput, ['browserify']);
  gulp.watch(sassInput, ['sass']);
});

// setup our default task
gulp.task('default', ['sass', 'browserify', 'watch' /*, possible other tasks... */]);

// setup our deploy task
gulp.task('build', ['sass', 'buildSass', 'browserify', 'buildJS' /* other deploy tasks */]);