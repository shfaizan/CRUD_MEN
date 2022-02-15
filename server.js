const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

app.listen(3000, function ()
{
    console.log('listening on port 3000'); 
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/quotes',(req, res) => {
    console.log(req.body)
})

// Connecting local mongo database using callback function
// MongoClient.connect("mongodb://localhost:27017/general", (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
//   })

// Connecting local mongo database using promise function
MongoClient.connect("mongodb://localhost:27017/general", { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('avengers_quotes')
        const collection = db.collection('quotes')
        app.use()
        app.get()
        app.post()
        app.listen()
    })
    .