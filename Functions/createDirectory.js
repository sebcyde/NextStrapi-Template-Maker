import path from 'path';
import fs from 'fs';

const createDirectory = async (directoryPath, directoryName) => {
	const Directory = path.join(directoryPath, directoryName);

	fs.mkdir(Directory, (err) => {
		if (err) {
			console.error(`Error creating directory: ${err}`);
		} else {
			console.log(`Directory '${Directory}' created successfully.`);
		}
	});

	return Directory;
};

export { createDirectory };
