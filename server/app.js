const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const artefactoRoutes = require('./routes/Artefacto.route');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use('/api', artefactoRoutes)

module.exports = app;