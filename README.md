# Gulp Space

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/HH_901_and_HH_902_in_the_Carina_nebula_(captured_by_the_Hubble_Space_Telescope).jpg" width="300">

### Group your Gulp tasks via colon-delimited namespaces. 
### Compatible with Gulp 3 & 4.



## Getting Started
```
npm i gulp-space -D
```

## Example
```
var gulp = require('gulp'),
    gulpSpace = require('gulp-space'),
    getTaskNamesInNamespace = gulpSpace(gulp)

gulp.task('build:styl:convert', function () {
  var CSS_DEST = './web-app/css';
  var SRC_ROOT =  '.';

  return gulp.src('./web-app/styl/foo/foo.styl')
    .pipe(stylus({use: [nib()]}))
    .pipe(gulp.dest(path.join(SRC_ROOT,CSS_DEST)));
});

gulp.task('build:clean:styl', function(){
  return gulp.src(['./web-app/styl/stats/*.styl', './web-app/css/foo.css'], {
      read: false,
      allowEmpty: true
    })
    .pipe(grimraf());
});

gulp.task('build', gulp.parallel(getTaskNamesInNamespace('build')));
```
