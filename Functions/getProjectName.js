import { getUserInput } from './getInput.js';

const getProjectName = async () => {
	let ProjectName;
	let confirm;

	// Get Project Name
	do {
		ProjectName = await getUserInput(
			'Whats the name of the project? (No Spaces or caps)'
		);

		confirm = await getUserInput(
			`${ProjectName.toLowerCase()} is correct? y/n`
		);

		if (!confirm.toLowerCase() == 'y') {
			console.log('Incorrect format. Acceptable format is y/n');
		}
	} while (!confirm.toLowerCase() == 'y');

	return ProjectName;
};

export { getProjectName };
