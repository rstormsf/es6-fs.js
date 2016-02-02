# es6-fs.js
FileSystem Promisified in ES6

import FileSystem from 'index.js'

FileSystem.readFile(1024*1000*1000, '/video.webm', {create: false}).then(function(file){console.log(file)});
