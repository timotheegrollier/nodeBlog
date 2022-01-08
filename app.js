const express = require('express')
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()

const userRoutes = require('./routes/user');

const messagesRoutes = require('./routes/messages')

const articlesRoutes = require('./routes/articles')

const app = express()

app.use(express.json())

const DBUSER = process.env.DBUSER


mongoose.connect("mongodb+srv://" + DBUSER + "@cluster0.zvv7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors());

app.use('/api/auth', userRoutes)

app.use('/api/messages',messagesRoutes)

app.use('/api/articles',articlesRoutes)



module.exports = app;