import readline from 'readline';

const getUserInput = async (prompt) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve, reject) => {
		rl.question(`${prompt}\n`, (userInput) => {
			rl.close();
			resolve(userInput);
		});
	});
};

export { getUserInput };
