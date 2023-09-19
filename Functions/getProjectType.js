const getProjectType = async () => {
	let ProjectType;

	do {
		ProjectType = await getUserInput('Freelance or personal? f/p');

		if (ProjectType.toLowercase() != 'f' || 'p') {
			console.log('Incorrect format. Acceptable format is f/p');
		}
	} while (ProjectType.toLowercase() != 'f' || 'p');

	return ProjectType;
};

module.exports = { getProjectType };
