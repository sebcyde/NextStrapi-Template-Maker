import { generateFrontendCode } from './generateFrontendCode.js';
import { createBackend } from './createBackend.js';

const {
	Worker,
	isMainThread,
	parentPort,
	workerData,
} = require('worker_threads');

const multiThread = async (ParentDirectory, FrontendDirectory) => {
	if (isMainThread) {
		const frontendData = 'frontend data';
		const backendData = 'backend data';

		// Create a worker thread for generateFrontendCode
		const worker1 = new Worker(__filename, { workerData: FrontendDirectory });

		// Create a worker thread for createBackend
		const worker2 = new Worker(__filename, {
			workerData: ParentDirectory,
		});

		// Handle messages from worker threads
		worker1.on('message', (result1) => {
			console.log(`Result from generateFrontendCode: ${result1}`);
		});

		worker2.on('message', (result2) => {
			console.log(`Result from createBackend: ${result2}`);
		});

		// Start the worker threads
		worker1.postMessage({ task: 'generateFrontendCode' });
		worker2.postMessage({ task: 'createBackend' });
	} else {
		// Worker thread
		parentPort.on('message', async (message) => {
			if (message.task === 'generateFrontendCode') {
				const result = await generateFrontendCode(workerData);
				parentPort.postMessage(result);
			} else if (message.task === 'createBackend') {
				const result = await createBackend(workerData);
				parentPort.postMessage(result);
			}
		});
	}
};

export { multiThread };
