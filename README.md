#[gulp](https://github.com/wearefractal/gulp)-html-remove
==============

> Cleans out HTML nodes which contain specified attributes.

## Installation

```
npm install --save-dev gulp-html-remove
```
## Examples

```js
var gulp = require('gulp'),
    remove = require('gulp-html-remove');

gulp.task('default', function () {
    
    // Will remove any nodes which contain to-remove="foo" or to-remove="bar" attributes.
    return gulp.src('./templates/**/*.html')
        .pipe(remove({ attrs : { 'to-remove' : ['foo', 'bar'] }}))
        .pipe(gulp.dest('./tmp'));
        
    // Will remove any nodes which contain attributes "to-remove1" or "to-remove2" with any values. 
    return gulp.src('./templates/**/*.html')
        .pipe(remove({ attrs : ['to-remove1', 'to-remove2'] }))
        .pipe(gulp.dest('./tmp'));
});
```

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License) @ Eugene Gluhotorenko
