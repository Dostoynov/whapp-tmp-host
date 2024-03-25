const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

// Define the files you want to keep
const filesToKeep = ['CNAME', '.github', '.nojekyll', 'LICENSE', 'package.json', 'cleanup.js', 'README.md', 'node_modules', '.git', '.gitignore'];

// Get the directory you want to clean up
const directoryPath = path.join(__dirname, '/');

// Get all files in the directory
const files = fs.readdirSync(directoryPath);

// Iterate over the files
for (const file of files) {
    // If the file is not in the array of files to keep, delete it
    if (!filesToKeep.includes(file)) {
        rimraf.sync(path.join(directoryPath, file));
    }
}