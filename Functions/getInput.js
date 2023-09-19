
const getUserInput = async (prompt) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve, reject) => {
		rl.question(prompt, (userInput) => {
			rl.close();
			resolve(userInput);
		});
	});
};

module.exports = { getUserInput };
