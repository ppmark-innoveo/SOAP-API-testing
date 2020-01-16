const gulp = require('gulp');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const args = require('yargs').argv;
var sourcemaps = require('gulp-sourcemaps');

const paths = {
    resources: args.input !== undefined ? args.input : '.',
    output: (args.output !== undefined ? args.outputPath : './')
};

gulp.task('default', function () {
    gutil.log('Compiling SASS file...');
    gutil.log('-----------------------------------------------------------------');
    return gulp.src(['!./node_modules/**/*', `${paths.resources}/**/*.scss`])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})
            .on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.output));
});

gulp.task('watch-sass', ['default'], function () {
    gutil.log('Monitoring changes on any sass file ...');
    gulp.watch([`${paths.resources}/**/*.scss`], ['default']);
});