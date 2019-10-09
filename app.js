const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from Node Js');
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
})