const commonHeaders = {
    accept: process.env.ACCEPT,
    'Bridge-Version': process.env.BRIDGE_VERSION,
    'Client-Id': process.env.CLIENT_ID,
    'Client-Secret': process.env.CLIENT_SECRET
};

async function makeApiCall(url, options) {
    try {
        const response = await fetch(url, options);
        return response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function userAuthentication() {
    const options = {
        method: 'POST',
        headers: {
            ...commonHeaders,
            'content-type': 'application/json',
        },
        body: JSON.stringify({ email: process.env.USER_MAIL, password: process.env.USER_PASSWORD })
    };

    return makeApiCall(process.env.BRIDGE_AUTHENTICATE, options);
}

async function listItemUser(token) {
    const options = {
        method: 'GET',
        headers: {
            ...commonHeaders,
            'Authorization': `Bearer ${token}`,
        }
    };

    return makeApiCall(`${process.env.BRIDGE_ITEM}`, options);
}

async function listAccount(id, token) {
    const options = {
        method: 'GET',
        headers: {
            ...commonHeaders,
            'Authorization': `Bearer ${token}`,
        }
    };

    return makeApiCall(`${process.env.BRIDGE_ACCOUNT}?item_id=${id}`, options);
}

async function getLastTransactions(token, limit) {
    const options = {
        method: 'GET',
        headers: {
            ...commonHeaders,
            'Authorization': `Bearer ${token}`,
        }
    };
    return makeApiCall(`${process.env.BRIDGE_TRANSACTION}?limit=${limit}`, options);
}

module.exports = { userAuthentication, listItemUser, listAccount, getLastTransactions };
