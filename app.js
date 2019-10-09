const express = require('express');
const morgan = require('morgan');
const app = express();


//Bringing routes
const { getPosts } = require('./routes/post');

const myOwnMiddleware = () => {
    console.log(`Middleware works`);
};


//Middleware
app.use(morgan("dev"));
app.use(myOwnMiddleware);

app.get('/', getPosts);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
})