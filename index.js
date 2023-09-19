const { exec } = require('child_process');

// command to generate template
const command = 'npx create-strapi-starter@latest my-nextjs-strapi-app';

// Execute the command
exec(command, (error, stdout, stderr) => {
	if (error) {
		console.error(`Error: ${error.message}`);
		return;
	}
	if (stderr) {
		console.error(`Error: ${stderr}`);
		return;
	}
	console.log(`Success: ${stdout}`);
});
