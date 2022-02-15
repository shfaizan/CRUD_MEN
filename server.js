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



// Connecting local mongo database using callback function
// MongoClient.connect("mongodb://localhost:27017/avenger", (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
//   })

// Connecting local mongo database using promise function
MongoClient.connect("mongodb://localhost:27017/avenger", { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('avenger')
        const collection = db.collection('quotes')
        console.log('Connected to Collection')
        app.post('/quotes', (req, res) => {
            console.log('heeeerrrrr')
            collection.insertOne(req.body)
            console.log('now heeeerrrrr')
        })

    })
    .catch(err => console.error(err))