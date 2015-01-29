var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    remove = require('./index');

gulp.task('case1', function () {
    return gulp.src('./test/examples/case1.html')
        .pipe(remove({ attrs : { 'to-remove' : ['foo', 'bar'] }}))
        .pipe(gulp.dest('./test/tmp'));
});

gulp.task('case2', function () {
    return gulp.src('./test/examples/case2.html')
        .pipe(remove({ attrs : ['to-remove'] }))
        .pipe(gulp.dest('./test/tmp'));
});

gulp.task('case3', function () {
    return gulp.src('./test/examples/case3.html')
        .pipe(remove({ attrs : ['to-remove1', 'to-remove2'] }))
        .pipe(gulp.dest('./test/tmp'));
});

gulp.task('case4', function () {
    return gulp.src('./test/examples/case4.html')
        .pipe(remove({ attrs : { 'to-remove1' : ['foo1', 'bar1'], 'to-remove2' : ['foo2', 'bar2'] }}))
        .pipe(gulp.dest('./test/tmp'));
});

gulp.task('case5', function () {
    return gulp.src('./test/examples/case5.html')
        .pipe(remove({ attrs : ['to-remove']}))
        .pipe(gulp.dest('./test/tmp'));
});


gulp.task('test', ['case1', 'case2', 'case3', 'case4', 'case5'], function () {
    return gulp.src('./test/*.js')
        .pipe(mocha());
});

gulp.task('default', ['test']);