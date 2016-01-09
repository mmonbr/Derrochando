var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    //Semantic UI
    mix.copy('semantic/dist/semantic.css', 'public/css/semantic.css')
        .copy('semantic/dist/semantic.js', 'public/js/semantic.js')
        .copy('semantic/dist/themes', 'public/css/themes');

    //JS
    //mix.browserify('app.js');

    //Styles
    mix.styles([
     //'lib/sweetalert.css',
     'semantic.css',
     //'app.css'
     ], './public/css/all.min.css', './public/css');

    //Scripts
    mix.scripts([
     //'lib/jquery-2.1.4.min.js',
     //'lib/sweetalert.min.js',
     'semantic.js',
     //'app.js'
     ], './public/js/all.min.js', './public/js');

    //Sync
    /*mix.browserSync({
     proxy: '20Pavos.app:8000'
     });*/
});

/*
 * Semantic UI
 */

var
    gulp = require('gulp'),
    watch = require('./semantic/tasks/watch'),
    build = require('./semantic/tasks/build')
    ;

gulp.task('watch-ui', watch);
gulp.task('build-ui', build);