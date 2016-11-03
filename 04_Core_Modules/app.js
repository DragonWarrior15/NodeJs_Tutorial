// for loacal modules, the whole path to the module is required
// for core modules, just the name will do

// fie system module
var fs = require('fs');
// write to file
fs.writeFileSync("test.txt", "test123\ntest456")
// read from file
console.log(fs.readFileSync("test.txt").toString());


// path module
var path = require("path")
