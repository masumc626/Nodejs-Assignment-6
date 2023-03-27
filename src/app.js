const express = require('express');
const app = express();

const blogRoute = require('./routes/blog');


//Router MIddlewares
app.use(express.json());
app.use('/', blogRoute);

module.exports = app;
