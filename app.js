const express = require('express');
const app = express();

//Bringing routes
const postRoutes = require('./routes/post');

app.get('/', postRoutes.getPosts);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
})