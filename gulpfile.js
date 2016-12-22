var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass'); // lib-sass wrapper not compiling anything, so ruby sass 
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

gulp.task('scripts', function() {
    gulp.src('assets/js/**/_*.js')
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('assets/js/'))
})

gulp.task('styles', () =>
    sass('assets/_scss/main.scss', {sourcemap: true})     
        .on('error', sass.logError)
        .pipe(sourcemaps.write())// for inline sourcemaps
        .pipe(autoprefixer('last 2 versions')) 
        //.pipe(gulp.dest('assets/css/dev/'))
        .pipe(rename("main.min.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/css')) // Jekyll deletes and recreates the contents of _site, so generate the _site folder that serves everything, and the standard assets folder for when the overwrite happens.
        .pipe(livereload())
        .pipe(gulp.dest('_site/assets/css'))

);

gulp.task('featherlight', () =>        
    //### Featherlight       
        sass('assets/_scss/vendors/featherlight.scss', {sourcemap: true})
        .on('error', sass.logError)
        .pipe(sourcemaps.write())// for inline sourcemaps
        .pipe(autoprefixer('last 2 versions')) 
        //.pipe(gulp.dest('assets/css/dev/'))
        .pipe(rename("featherlight.min.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/css')) // Jekyll deletes and recreates the contents of _site, so generate the _site folder that serves everything, and the standard assets folder for when the overwrite happens.
        .pipe(gulp.dest('_site/assets/css'))          
);      
            

gulp.task('watch', function () {
   gulp.watch('assets/_scss/*/_*.scss', ['styles']);
   gulp.watch('assets/_scss/vendors/featherlight.scss', ['featherlight']);
   gulp.watch('assets/js/**/_*.js', ['scripts']);
   livereload.listen();
});

// APPROVED FOOD DEMO
gulp.task('af-styles', () =>
    sass('work/af-december2016/assets/_scss/main.scss', {sourcemap: false})     
        //.on('error', sass.logError)
        //.pipe(sourcemaps.write())// for inline sourcemaps
        .pipe(autoprefixer('last 2 versions')) 
        .pipe(rename("af-main.min.css"))
          
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/css/project-specific'))
        .pipe(livereload())
        .pipe(gulp.dest('_site/assets/css/project-specific'))
);

gulp.task('af-scripts', function() {
    gulp.src('work/af-december2016/assets/js/**/_*.js')
        .pipe(uglify())
        .pipe(concat('approved-food.min.js'))
        .pipe(gulp.dest('assets/js/project-specific'))
        .pipe(gulp.dest('_site/assets/js/project-specific'))
})


gulp.task('af-watch', function () {
   gulp.watch('work/af-december2016/assets/_scss/*/_*.scss', ['af-styles']);
   gulp.watch('work/af-december2016/assets/js/**/_*.js', ['af-scripts']);
   livereload.listen();
});

//gulp.task('default', 'watch');