/* eslint-disable prettier/prettier */
const fs = require('fs');

let obj = {
    table: []
};
fs.readFile('./public/import-map.json', function readFileCallback(err, data) {
    obj = JSON.parse(data);
    let json = JSON.stringify(obj, null, 2);
    fs.writeFileSync('./dist/import-map.json', json, 'utf-8');
})