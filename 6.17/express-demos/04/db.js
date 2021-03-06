const fs = require('fs');
const {
    promiseify
} = require('util');
const path = require('path');

const readFile = promiseify(fs.readFile);
const dbPath = path.join(__dirname, './db.json');

// 
exports.getDb = async () => {
    const data = await readFile(dbPath, 'utf8');
    return JSON.parse(data);
}