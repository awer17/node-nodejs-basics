import fs from 'fs/promises';

const create = async () => {
    const content = 'I am fresh and young inside';
    const filename = 'fresh.txt';

    let shouldCreateFile = true;

    try {
        // Check if the file already exists asynchronously
        await fs.access(filename);

        // If access does not throw an error, then the file exists
        console.log(`File '${filename}' already exists. FS operation failed.`);
        shouldCreateFile = false;
    } catch (notFoundError) {
        // File does not exist
    }

    if (shouldCreateFile) {
        try {
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






