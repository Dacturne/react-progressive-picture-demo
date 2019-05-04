const serveWebp = require('serve-webp');
const app = require('express')();
const path = require('path');

app.get('/*',serveWebp({
    root: path.resolve(process.cwd()),
    cache: path.resolve(process.cwd(),'webp')
}));

app.listen(3333);