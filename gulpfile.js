var gulp = require('gulp'),
watch=require('gulp-watch'),
postcss=require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
cssVars=require('postcss-simple-vars'),
nested=require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function() {
  // place code for your default task here
console.log("Hi! My name is Aastha")
});

gulp.task('html', function() {
  
console.log("something changed in the HTML file");
});

gulp.task('styles', function() {
  
//console.log("something changed in the css files");

return gulp.src('./app/assets/styles/**/*.css')
.pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
  watch('./app/index.html' , function(){
	  gulp.start('html');
  })
  
    watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });


});