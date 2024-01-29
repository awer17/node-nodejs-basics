import fs from 'fs/promises';
import path from 'path';

const create = async () => {
    const content = 'I am fresh and young inside';
    const folderName = 'files';
    const filename = path.join(folderName, 'fresh.txt');

    try {
        await fs.access(filename);
        console.log(`File '${filename}' already exists. FS operation failed.`);
    } catch (notError) {
        try {
            await fs.writeFile(filename, content);
            console.log('File created successfully!');
        } catch (writeError) {
            console.error('Error creating file:', writeError);
        }
    }
};
create();







