const fs = require('fs').promises;
const { app } = require('../index');

async function readFileJson() {
    const jsonFilePath = 'detailBank.json';
    const jsonData = await fs.readFile(jsonFilePath, 'utf8');
    return JSON.parse(jsonData);
}

describe('Test detailBank file', () => {
    test('Check the application function that compares identical values in the detailBank.json file.', async () => {
        const result = await app();
        const expectedFileDetailsBank = await readFileJson();
        expect(result).toEqual(expectedFileDetailsBank);
        expect(result.access_token).toEqual(expectedFileDetailsBank.access_token)
        expect(result.item).toEqual(expectedFileDetailsBank.item)
        expect(result.item[1].accounts).toEqual(expectedFileDetailsBank.item[1].accounts)
        expect(result.transactions).toEqual(expectedFileDetailsBank.transactions);
    });
});