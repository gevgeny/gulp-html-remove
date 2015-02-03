#[gulp](https://github.com/wearefractal/gulp)-html-remove
==============

> Cleans out HTML nodes by CSS selectors or attributes. 

## Installation

```
npm install --save-dev gulp-html-remove
```
## Usage

Remove nodes by CSS selectors (See [cheerio](https://https://github.com/cheeriojs/cheerio) to know about supported selectors).

```js
var gulp = require('gulp'),
    remove = require('gulp-html-remove');

gulp.task('default', function () {
    
    // Will remove any nodes with "to-remove" class.
    gulp.src('./templates/**/*.html')
        .pipe(remove('.to-remove'))
        .pipe(gulp.dest('./tmp'));
        
    // Will remove all nodes with "my-attr" attribute does not equal to "foo"
    gulp.src('./templates/**/*.html')
        .pipe(remove('[my-attr][my-attr!="foo"]'))
        .pipe(gulp.dest('./tmp'));
});
```

Remove nodes by attributes

```js
var gulp = require('gulp'),
    remove = require('gulp-html-remove');

gulp.task('default', function () {
    
    // Will remove any nodes which contain to-remove="foo" or to-remove="bar" attributes.
    gulp.src('./templates/**/*.html')
        .pipe(remove({ attrs : { 'to-remove' : ['foo', 'bar'] }}))
        .pipe(gulp.dest('./tmp'));
        
    // Will remove any nodes which contain attributes "to-remove1" or "to-remove2" with any values. 
    gulp.src('./templates/**/*.html')
        .pipe(remove({ attrs : ['to-remove1', 'to-remove2'] }))
        .pipe(gulp.dest('./tmp'));
});
```

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License) @ Eugene Gluhotorenko
