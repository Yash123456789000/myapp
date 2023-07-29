require('dotenv').config()
const express = require('express');
const app=express();
//const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Yash:Yash%4012345@cluster0.h6owzey.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
const quoteRouter = require('./Routes/quote');
app.use('/quote', quoteRouter);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}))
app.use('/', (req,res) => {
    res.send('Hello World!');
})

app.listen(5050, ()=> console.log('server started on port 5050'));