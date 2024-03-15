const express = require('express');
const client = require('./client');
const app = express()
const axios = require('axios').default;
const port = 9000

app.get('/', async (req, res) => {
    const cacheValue = await client.get('todos');
    if (cacheValue) {
        return res.json(JSON.parse(cacheValue));
    } else {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
        client.set('todos', JSON.stringify(data));
        client.expire('todos', 120);
        return res.json(data);
    }

})

app.listen(port, () => {
    console.log(`Test app listening on port ${port}`)
})
