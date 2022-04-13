const path = require("path");
const fs = require("fs");
const data = fs.readFileSync("./lib/themplate.txt");

let value = data.toString().trim();
exports.string = value;
