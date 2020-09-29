const { addAsync } = require('@awaitjs/express');
const express = require('express');
const morgan = require('morgan');
const app = addAsync(express());
const routes = require('./routes');

app.useAsync(morgan('combined'));

app.use(routes.default);

app.use((error, req, res, next) => {
  res.send(error.message);
});

const server = app.listen(5000);
