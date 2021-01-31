const debounce = require('lodash.debounce');
const chokidar = require('chokidar');
const program = require('caporal');
const fs = require('fs');
program.version('1').argument('[filename]', 'name of file').action(async({ filename }) => {
    const name = filename || 'index.js';
    try{
    await fs.promises.access(name);}
    catch (err){
        throw new error('file name not incorrect');
     }
	const start = debounce(() => {
		console.log('starting program');
	}, 100);
	chokidar
		.watch('.')
		.on('add', start)
		.on('change', () => start)
		.on('unlink', () => start);
});
program.parse(process.argv);
