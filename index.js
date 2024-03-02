require('dotenv').config();
const {
    getLastTransactions,
    userAuthentication,
    listItemUser,
    listAccount
} = require('./api');
const { excludeProperties, saveInfoToJson } = require('./utils');

async function app() {
    try {
        const { access_token, expires_at } = await userAuthentication();
        const userItems = await listItemUser(access_token);
        const userItemId = userItems.resources[0].id;
        const accountList = await listAccount(userItemId, access_token);
        const transactionCount = 2
        const recentUserTransactions = await getLastTransactions(access_token, transactionCount);
        const listItem = userItems;
        const listAccounts = accountList;
        const listUserTransactions = recentUserTransactions;

        const accessToken = { value: access_token, expires_at };
        const accounts = await excludeProperties(listAccounts.resources, [
            'loan_details',
            'is_paused',
            'item_id',
            'bank_id',
            'savings_details',
            'is_pro'
        ]);

        const infoBankUser = {
            access_token: accessToken,
            item: [...listItem.resources, { accounts }],
            transactions: listUserTransactions.resources
        };

        await saveInfoToJson(infoBankUser, 'detailBank.json');

        return infoBankUser;
    } catch (error) {
        throw error;
    }
}

async function main() {
    try {
        await app();
    } catch (error) {
        console.error('Une erreur est survenue:', error);
    }
}

main();


module.exports = { app };