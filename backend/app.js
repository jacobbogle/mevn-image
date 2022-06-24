const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const monodb = require('mongodb')
//const cors = require('cors');
const QuotesRoute = require('./routes/Quotes')
app.use('/quotes', QuotesRoute)


//create our express app
const app = express()


//Middleware
app.use(bodyParser.json())
//app.use(cors())


//Routes
app.get("/", (req, res) => {
    res.send('hello fucker')
})

//Post
router.post('/new', (req,res)=>{
    res.send('posted info')
})


//linking database
const uri = 'mongodb://docker:mongopw@localhost:55000';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connencted")
}).catch(err => console.log(err))

//start server
app.listen(3000, () => {
    console.log("Listening at port:3000")
})
