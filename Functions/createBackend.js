import { spawn } from 'child_process';
import path from 'path';

const createBackend = async (Directory) => {
	const args = ['create-strapi-app@latest', 'backend', '--quickstart'];
	const npxPath = path.normalize('C:/Program Files/nodejs/npx.cmd');

	return new Promise((resolve, reject) => {
		const childProcess = spawn(npxPath, args, {
			stdio: 'pipe',
			cwd: path.normalize(Directory),
		});

		childProcess.stdout.pipe(process.stdout);

		childProcess.on('close', (code) => {
			if (code === 0) {
				console.log('Backend creation completed successfully.');
				resolve();
			} else {
				console.error(`Backend creation exited with code ${code}`);
				reject();
			}
		});
		childProcess.stdin.end();
	});
};

export { createBackend };
