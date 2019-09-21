const newrelic = require('newrelic');
const express = require('express');
const app = express();
const port = 3008;
const router = require('./router.js');

const bodyParser = require('body-parser');
const path = require('path');
// const morgan = require('morgan');

app.locals.newrelic = newrelic;

// app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
