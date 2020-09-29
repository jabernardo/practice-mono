"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _express2 = require("@awaitjs/express");

var _HomeController = _interopRequireDefault(require("../controllers/HomeController"));

var router = (0, _express2.addAsync)((0, _express.Router)());
var homeController = new _HomeController["default"]();
router.get('/', homeController.index.bind(homeController));
var _default = router;
exports["default"] = _default;