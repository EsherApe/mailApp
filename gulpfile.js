'use strict';

const gulp = require('gulp'),
    ngAnnotate = require('gulp-ng-annotate'),
    //Server
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    ngrok = require('ngrok'),
    //Images
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    spritesmith = require('gulp.spritesmith'),
    //CSS
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    //Other
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel');


//=================================================================


const path = {
    build: {
        html: 'public/',
        php: 'public/api',
        js: 'public/js/',
        css: 'public/css/',
        img: 'public/images/',
        fonts: 'public/fonts/'
    },
    src: {
        html: 'src/**/*.html',
        php: 'src/php/**/*.php',
        js: ['src/js/**/*.js'],
        style: 'src/css/*.scss',
        img: 'src/images/*.*',
        spritesStyle: 'src/css/',
        sprites: 'src/images/sprites/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        php: 'src/**/*.php',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.scss',
        img: 'src/images/*.*',
        sprites: 'src/images/sprites/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './public'
};

gulp.task('webserver', function () {
    browserSync({
        server: "./public"
    }, (err, bs) => {
            ngrok.connect(bs.options.get('port'), function (err, url) {
        });
    });
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('sprites:build', function () {
    const spritesData = gulp.src(path.src.sprites)
        .pipe(spritesmith({
            imgName: '../images/sprites.png',
            cssName: '_sprites.scss',
            cssFormat: 'scss',
            algorithm: 'binary-tree',
            /*cssVarMap: function(sprites) {
             sprites.name = 's-' + sprites.name
             }*/
        }));

    spritesData.img.pipe(gulp.dest(path.build.img));
    spritesData.css.pipe(gulp.dest(path.src.spritesStyle));
});

gulp.task('image:build', function () {
    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('html:build', function () {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('php:build', function () {
    gulp.src(path.src.php)
        .pipe(gulp.dest(path.build.php));

    gulp.src([
        'src/.htaccess'
    ])
        .pipe(gulp.dest(path.build.html));
});

gulp.task('js:build', function () {
    return gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(ngAnnotate())
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['src/css/'],
            outputStyle: 'compressed',
            sourceMap: true
        }).on('error', sass.logError))
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('concatPlug:css', function () {
    return gulp.src([
        'bower_components/angular-busy/dist/angular-busy.css'
    ])
        .pipe(concat('components.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('concatPlug:js', function () {
    return gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-busy/dist/angular-busy.js',
        'bower_components/ngstorage/ngStorage.js',
        'bower_components/angular-mocks/angular-mocks.js'
    ])
        .pipe(concat('components.min.js'))
        .pipe(uglify().on('error', (e) => {
            console.log(e);
        }))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('build', [
    'html:build',
    'php:build',
    'js:build',
    'style:build',
    'fonts:build',
    'sprites:build',
    'image:build',
    'concatPlug:css',
    'concatPlug:js'
]);

gulp.task('watch', function () {
    watch([path.watch.html], (event, cb) => {
        gulp.start('html:build');
    });
    watch([path.watch.php], (event, cb) => {
        gulp.start('php:build');
    });
    watch([path.watch.style], (event, cb) => {
        gulp.start('style:build');
    });
    watch([path.watch.js], (event, cb) => {
        gulp.start('js:build');
    });
    watch([path.watch.sprites], (event, cb) => {
        gulp.start('sprites:build');
    });
    watch([path.watch.img], (event, cb) => {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], (event, cb) => {
        gulp.start('fonts:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);