import { createDirectory } from './Functions/createDirectory.js';
import { getProjectName } from './Functions/getProjectName.js';
import { getProjectType } from './Functions/getProjectType.js';
import { createFrontend } from './Functions/createFrontend.js';
import { createBackend } from './Functions/createBackend.js';
import path from 'path';
import { multiThread } from './Functions/multiThread.js';

const main = async () => {
	console.log('Starting Next/Strapi Templater');

	const BasePath = 'C:/Users/SebCy/Documents/Code';
	console.log(' ');
	const ProjectType = await getProjectType();
	console.log(' ');
	const ProjectName = await getProjectName();

	// set parent directory to contain files
	const Dir =
		ProjectType.toLowerCase() == 'p'
			? path.normalize(`${BasePath}/1-Projects/04-Next/00-Strapi`)
			: path.normalize(`${BasePath}/0-Work/Freelance`);
	console.log(' ');

	// create parent directory
	console.log('Creating Directory');
	const NewDir = await createDirectory(Dir, ProjectName);
	const ParentDirectory = path.normalize(NewDir);
	console.log('Created Directory at: ', ParentDirectory);
	console.log(' ');

	// create frontend (NextJS) - Very fast
	console.log(`Creating Frontend...`);
	await createFrontend(ParentDirectory);
	console.log(`Frontend creation successful.`);
	console.log(' ');

	// create backend (strapi auto runs server on creation) - Very slow
	// multithread backend creation and frontend boilerplate writing?
	console.log(`Creating Backend...`);
	await multiThread(ParentDirectory, path.join(ParentDirectory, 'frontend'));
	console.log(`Backend creation successful.`);
	console.log(' ');

	// Write basic boilerplate to files to save time
	console.log(`Generating boilerplate code...`);
	console.log(`Boilerplate generation successful.`);
	console.log(' ');

	// Connect back and front ends
	console.log(`Connecting server with frontend...`);
	console.log(`Connection successful.`);
	console.log(' ');
	// End
	console.log('Code generation complete.');
};

main();
