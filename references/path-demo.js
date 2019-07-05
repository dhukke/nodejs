const path = require('path');

console.log('base file name: ', path.basename(__filename));

console.log('directory name: ', path.dirname(__filename));

console.log('file extesion: ', path.extname(__filename));

console.log('path object: ', path.parse(__filename));

console.log('concat paths: ', path.join(__dirname, 'test', 'test.js'));
