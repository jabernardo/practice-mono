"use strict";

var _require = require('@awaitjs/express'),
    addAsync = _require.addAsync;

var express = require('express');

var morgan = require('morgan');

var app = addAsync(express());

var routes = require('./routes');

app.useAsync(morgan('combined'));
app.use(routes["default"]);
app.use(function (error, req, res, next) {
  res.send(error.message);
});
var server = app.listen(5000);