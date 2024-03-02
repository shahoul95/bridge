const fs = require('fs').promises;

async function excludeProperties(accounts, propertiesToExclude) {
    return accounts.map(account => {
        return Object.fromEntries(
            Object.entries(account).filter(([key]) => !propertiesToExclude.includes(key))
        );
    });
}

async function saveInfoToJson(info, fileName) {
    const jsonStringInfo = JSON.stringify(info, null, 2);
    await fs.writeFile(fileName, jsonStringInfo);
}

module.exports = { excludeProperties, saveInfoToJson };
