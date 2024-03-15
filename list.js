const client = require('./client');

async function init() {
    await client.lpush("messages", 1);
    await client.lpush("messages", 2);
    await client.lpush("messages", 3);
    await client.lpush("messages", 4);
    await client.lpush("messages", 5);
    // console.log(client.blpop('messages', 20));
    // console.log(await client.rpop('messages'));
    console.log(await client.lrange('messages',0,-1));
}

init();