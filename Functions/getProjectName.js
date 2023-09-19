import { getUserInput } from './Functions/getInput';

const getProjectName = async () => {
	let ProjectName;
	let confirm;

	// Get Project Name
	do {
		ProjectName = await getUserInput(
			'Whats the name of the project? (No Spaces or caps)'
		);

		confirm = await getUserInput(
			`${ProjectName.toLowercase()} is correct? y/n`
		);

		if (!confirm.toLowercase() == 'y') {
			console.log('Incorrect format. Acceptable format is y/n');
		}
	} while (!confirm.toLowercase() == 'y');

	return ProjectName;
};

module.exports = { getProjectName };
