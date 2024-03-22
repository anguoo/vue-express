const express = require('express');
const app = express();

const db = require('./config/mongodb').mongoUrl
const { MongoClient } = require('mongodb');

const connectDB = async () => {
    try {
        const client = await MongoClient.connect(db)
        await client.connect()

        console.log('MongoDB Connected')
    } catch (err) {
        console.error(err.message)
    }
}
connectDB()

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})