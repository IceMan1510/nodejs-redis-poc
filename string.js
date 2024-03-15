const client = require('./client');

async function init() {
    await client.set('user:3', 'Ankitsingh Bisht');
    const result = await client.get('user:3');
    console.log("result => ", result);
}

init();