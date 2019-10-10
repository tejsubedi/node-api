const express = require('express');
const morgan = require('morgan');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
dotenv.config();


//DB connection 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => console.log(`DB connected`));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
})
//Bringing routes
const postRoutes = require('./routes/post');


//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/', postRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
})