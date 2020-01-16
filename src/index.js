const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const mongoConnectionString = 'mongodb+srv://admin:admin@cluster0-oj2e7.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3000);
