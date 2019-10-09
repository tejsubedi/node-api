const express = require('express');
const morgan = require('morgan');
const app = express();


//Bringing routes
const  postRoutes = require('./routes/post');


//Middleware
app.use(morgan("dev"));


app.use('/', postRoutes);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
})