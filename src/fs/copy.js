import fs from 'fs/promises';
import path from 'path';

const copy = async () => {
    const sourcePath = 'files';
    const destinationPath = 'files_copy';

//проверка коталогов

    try {
        await fs.stat(sourcePath);
    } catch (error) {
        console.error('FS operation failed:', 'Source directory not found');
        return;
    }
    
    try {
        await fs.stat(destinationPath);
        throw new Error('FS operation failed: Destination directory already exists');
    } catch (error) {
        if (error.code !== 'ENOENT') {
        throw error;
    }

//копирование
    try {
        
        await fs.mkdir(destinationPath);
        const files = await fs.readdir(sourcePath);
// объект с именами файлами

        for (const file of files) {
            const sourceFilePath = path.join(sourcePath, file);
            const destinationFilePath = path.join(destinationPath, file);
            await fs.copyFile(sourceFilePath, destinationFilePath);
        }

        console.log('Copy operation successful');

    } 
    catch (copyError) {
        console.error('FS operation failed:', copyError.message);
    }
    }
};


copy().catch((err) => console.error(err));
