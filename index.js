const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const every = command => {
	const colors = {
		Black: '\u001B[30m',
		Red: '\u001B[31m',
		Green: '\u001B[32m',
		Yellow: '\u001B[33m',
		Blue: '\u001B[34m',
		Magenta: '\u001B[35m',
		Cyan: '\u001B[36m',
		White: '\u001B[37m'
	};

	const folders = fs.readdirSync(process.cwd(), {withFileTypes: true})
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name);

	const successRuns = [];
	const unSuccessRuns = [];
	const spawnedProceses = [];

	folders.forEach(repo => {
		spawnedProceses.push(exec(`cd ${path.join(process.cwd(), repo)} && ${command}`, (error, stdout, stderr) => {
			console.log(colors.Blue, repo);

			if (error) {
				unSuccessRuns.push(repo);
				console.log(colors.Red, error);
				return;
			}

			successRuns.push(repo);
			console.log(colors.White, stdout || stderr);
		}));
	});

	let runs = 0;
	const tmOut = 300;
	const intId = setInterval(() => {
		if (folders.length === successRuns.length + unSuccessRuns.length) {
			clearInterval(intId);
			if (successRuns.length > 0) {
				console.log(colors.Green, `Command ${command} executed with success in ${successRuns.length}/${folders.length} folders: ${successRuns.join(', ')}`);
			}

			if (unSuccessRuns.length > 0) {
				console.log(colors.Red, `Command ${command} executed with error in ${unSuccessRuns.length}/${folders.length} folders: ${unSuccessRuns.join(', ')}`);
			}
		} else {
			runs++;
			if ((runs * tmOut) > (1000 * 60)) { // 1 min
				clearInterval(intId);
				console.log(colors.Yellow, 'Command chilled due to timeout!');
				spawnedProceses.forEach(pc => pc.abort());
				process.abort();
			}
		}
	}, tmOut);
};

module.exports = every;
