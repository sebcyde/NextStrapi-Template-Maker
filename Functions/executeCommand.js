import exec from 'child_process';

const executeCommand = async (command) => {
	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.error(`Error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.error(`Error: ${stderr}`);
			return;
		}
		console.log(`Success: ${stdout}`);
	});
};

export { executeCommand };
