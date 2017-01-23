var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {   //starts a task to watch for changes in the html file

  browserSync.init({ //initializes browserSync server in base directory app
    notify: false,  //will remove changes notification
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
      browserSync.reload();
  });
}); //end html watch task

  watch('./app/assets/styles/**/*.css', function() {    //starts a task to watch for changes in the css file
    gulp.start('cssInject');
  });

  //['styles'] will run and complete before cssInject task starts
    gulp.task('cssInject', ['styles'], function() {  //make sure to add return since it's an async function
      return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());   //makes whatever we pipe into browserSync available in the browser
    });
