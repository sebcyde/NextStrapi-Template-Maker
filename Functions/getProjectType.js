import { getUserInput } from './getInput.js';

const getProjectType = async () => {
	let ProjectType;

	do {
		ProjectType = await getUserInput('Freelance or personal? f/p');
		console.log('Entered: ', ProjectType);
		if (ProjectType.toLowerCase() != 'f' && ProjectType.toLowerCase() != 'p') {
			console.log('Incorrect format. Acceptable format is f/p');
		}
	} while (
		ProjectType.toLowerCase() != 'f' &&
		ProjectType.toLowerCase() != 'p'
	);

	return ProjectType;
};

export { getProjectType };
