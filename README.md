# es6-fs.js
FileSystem Promisified in ES6

Promise FileSystem.readFile(bytes, path, options);
```js
import FileSystem from 'index.js'

FileSystem.readFile(1024 * 1000 * 1000, '/video.webm', {create: false}).then(function(file){console.log(file)});
```
