// StartWarn.js
var [path, fs] = [require("path"), require("fs")];
class NoDistError extends Error {
    constructor(message) {
        super(message)
    }
}
if (fs.existsSync(path.join(
    __dirname,
    "dist"
))) // checks if the DIST folder exists.
{
    console.log("YAY! Start can help you test quicker!");
} else
{
    throw new NoDistError("Sorry, please run test instead, it'll build the dist stuff before it hosts a copy.");
}