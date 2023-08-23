const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json'); // Assumes your tsconfig.json is in the same directory

// Task to compile TypeScript files
gulp.task('compile-ts', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
});

// Default task to run when you execute 'gulp'
gulp.task('default', gulp.series('compile-ts'));