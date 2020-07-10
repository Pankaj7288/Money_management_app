const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our application'
    })
})
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log (`SERVER IS RUNING ON ${port}`)
    mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}, () =>{
        console.log ('Database connected')
    });
})