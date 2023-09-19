const path = require('path');
const fs = require('fs');

const createDirectory = async (directoryPath, directoryName) => {
	const Directory = path.join(directoryPath, directoryName);

	
	fs.mkdir(Directory, (err) => {
		if (err) {
			console.error(`Error creating directory: ${err}`);
		} else {
			console.log(`Directory '${fullPath}' created successfully.`);
		}
	});
};

module.exports = { createDirectory };
