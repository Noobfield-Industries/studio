// Gulpy gulpy!
// trust me im gonna use coffeescript when the plugin update comes (trust me bro)
var [gulp, coffee, concat, uglify, gif] = [require("gulp"), require("gulp-coffee"), require("gulp-concat"), require("gulp-uglify"), require("gulp-if")]; // big hack cuz it's easier to do it this way.
var {src, series, parallel, dest} = gulp;
var del = require("delete");

function clean(cb) {
    del(["dist/*.js"], function(err, deleted) {
        if (err) {
            cb(err)
        } else {
            cb()
        }
    })
}

function engine(cb) {
    // Engine function's tasks:
    /*
        - take all the files from .src/project/*.js
        - Uglify it (improves performance by some amount... Also makes debuging impossible without maps.)
        - Concat it into one file (better load on the network?? idk man)
        - return it.
    */
    src("./src/project/*.js", {sourcemaps: true})
        .pipe(uglify())
        .pipe(concat("engine.js"))
        .pipe(dest("./dist"))
    cb();
}

function editor(cb) {
    // Takes all of the editor code to match into one file.
    // TODO: Redo Editor, so it isn't one of the WORST codebases to mod.
    src("./src/editor/**", {sourcemaps: true})
        .pipe(uglify())
        .pipe(concat("editor.js"))
        .pipe(dest("./dist"))
    cb();
}

function player(cb) {
    // Same thing. Player JS now!
    src("./src/player/**.js", {sourcemaps: true})
        .pipe(uglify())
        .pipe(concat("player.js"))
        .pipe(dest("./dist"))
    cb();
}

function isJs(file) {
    return file.extname === ".js"
}
function isCss(file) {
    return file.extname === ".js"
}

function lib(cb) {
    src("./lib/**.js")
        // .pipe(gif(isJs, uglify())) // bruh
        .pipe(concat("libs.js"))
        .pipe(dest("./dist"))
    cb()
}

function css(cb) {
    src("./styles/*.css")
        .pipe(src("./lib/**.css"))
        .pipe(concat("styles.css"))
        .pipe(dest("./dist"))
    cb()
}

exports.default = series(clean, parallel(css, engine, editor, player), lib)
exports.styles = css
exports.libs = lib
exports.player = player
exports.editor = editor
exports.engine = engine
exports.clean = clean