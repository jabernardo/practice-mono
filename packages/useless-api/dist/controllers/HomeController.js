"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _messages = _interopRequireDefault(require("@practice-mono/messages"));

var HomeController = function () {
  function HomeController() {
    (0, _classCallCheck2["default"])(this, HomeController);
  }

  (0, _createClass2["default"])(HomeController, [{
    key: "index",
    value: function index(req, res, next) {
      res.send({
        'message': (0, _messages["default"])()
      });
    }
  }]);
  return HomeController;
}();

var _default = HomeController;
exports["default"] = _default;