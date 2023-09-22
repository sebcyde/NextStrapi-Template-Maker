import { spawn } from 'child_process';
import path from 'path';

const createFrontend = async (Directory) => {
	const args = [
		'create-next-app@latest',
		'frontend',
		'--javascript',
		'--no-eslint',
		'--no-tailwind',
		'--no-src-dir',
		'--app',
		'--import-alias',
		"'@/*'",
	];
	const npxPath = path.normalize('C:/Program Files/nodejs/npx.cmd');

	return new Promise((resolve, reject) => {
		const childProcess = spawn(npxPath, args, {
			stdio: 'pipe',
			cwd: path.normalize(Directory),
		});

		childProcess.stdout.pipe(process.stdout);

		childProcess.on('close', (code) => {
			if (code === 0) {
				console.log('Frontend creation completed successfully.');
				resolve();
			} else {
				console.error(`Frontend creation exited with code ${code}`);
				reject();
			}
		});
	});
};

export { createFrontend };
