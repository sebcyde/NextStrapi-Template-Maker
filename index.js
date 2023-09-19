import { createDirectory } from './Functions/createDirectory';
import { executeCommand } from './Functions/executeCommand';
import { getProjectName } from './Functions/getProjectName';
import { getProjectType } from './Functions/getProjectType';
import { getUserInput } from './Functions/getInput';
const path = require('path');

const main = async () => {
	console.log('Starting Next/Strapi Templater');

	const BasePath = 'C:/Users/SebCy/Documents/Code';
	const ProjectType = await getProjectType();
	const ProjectName = await getProjectName();

	// set parent directory to contain files
	const Dir =
		ProjectType.toLowerCase() == 'p'
			? path.normalize(`${BasePath}/1-Projects/04-Next/00-Strapi`)
			: path.normalize(`${BasePath}/0-Work/Freelance`);

	// create parent directory
	await createDirectory(Dir, ProjectName);

	// create backend (strapi auto runs server on creation)

	console.log(`Creating ${ProjectName}`);
	// await executeCommand('npx create-strapi-starter@latest backend');

	// create frontend directory to contain files
	// create frontend (NextJS)

	// Connect back and front ends

	// Write basic boilerplate to files to save time

	//
};

main();
