const readXlsxFile = require('read-excel-file/node');
const convertToJson = require('read-excel-file/schema');
const Schema = require('./schemas');

function lowercaseFirstLetter(str) {
    return str[0].toLowerCase() + str.slice(1);
}

async function asyncGetXlsxSheets(fileName) {
    return await readXlsxFile(fileName, { getSheets: true });
}

async function asyncReadXlsxSheet(fileName, curSchema, sheetName) {

    let rows = await readXlsxFile(fileName, {
        curSchema,
        sheet: sheetName,
        transformData(data) {
            return data.filter(row => row.filter(column => column !== null).length > 1)
        }
    });

    return convertToJson(rows, curSchema[Object.keys(curSchema)[0]]).rows;
}

function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash &= hash; 
    }
    return new Uint32Array([hash])[0].toString(36);
}

async function generateItemUIDs(fileData) {

    for (const row in fileData) {
        const UID = simpleHash(fileData[row].title);
        fileData[row]["_uid"] = UID;
    }

    return fileData;
}

async function excelParse(fileName) {

    const sheets = await (asyncGetXlsxSheets(fileName));
    const dataObject = {};

    for (let i = 0; i < sheets.length; i++) {
        let sheetName = sheets[i].name;
        const fileData = await asyncReadXlsxSheet(fileName, Schema[i], sheetName);

        sheetName = lowercaseFirstLetter(sheetName);
        dataObject[sheetName] = await generateItemUIDs(fileData);
    }

    return dataObject;
}

module.exports.excelParse = excelParse;