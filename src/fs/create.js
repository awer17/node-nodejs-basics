import fs from 'fs/promises';
import path from 'path';

const create = async () => {
    const content = 'I am fresh and young inside';
    const folderName = 'files';
    const filename = path.join(folderName, 'fresh.txt');

    let fileFlag = true;

    try {
        // Check if the file already exists asynchronously
        await fs.access(filename);

        // If access does not throw an error, then the file exists
        console.log(`File '${filename}' already exists. FS operation failed.`);
        fileFlag = false;
    } catch (notError) {
        // File does not exist
    }

    if (fileFlag) {
        try {
            // Create the folder if it doesn't exist
            await fs.mkdir(folderName, { recursive: true });

            // Create the file
            await fs.writeFile(filename, content);
            console.log('File created successfully!');
        } catch (writeError) {
            console.error('Error creating file:', writeError);
        }
    }
};

// Call the create function
create();







