const debounce = require('lodash.debounce');
const chokidar =  require('chokidar');
const program = require('caporal');
const start =   debounce(() => {
    console.log('starting program')
 }, 100);
chokidar.watch('.')
.on('add', start)
.on('change', () => console.log('file changed'))
.on('unlink', () => console.log('file unlinked'));
