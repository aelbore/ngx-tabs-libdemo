const gulp = require('gulp');

const { rimraf } = require('@ngx-devtools/common');
const { bundle } = require('@ngx-devtools/bundle');

gulp.task('bundle', (done) => {
  return Promise.all([ rimraf('dist'), rimraf('.tmp') ])
    .then(() => bundle())
    .then(() => rimraf('.tmp'));
});