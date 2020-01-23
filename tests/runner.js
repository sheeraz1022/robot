/* runner.js */
'use strict';

const fs = require('fs');
const path = require('path');

// Get all test specification files from directory
var testFiles = fs.readdirSync(__dirname + '/specs');

testFiles.forEach(function (file) {
    require(path.resolve('tests', 'specs', file)).default();
});