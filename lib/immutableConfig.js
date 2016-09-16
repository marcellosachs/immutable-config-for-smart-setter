'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var immutableConfig = {
  get: function get($$obj, propKey) {
    return $$obj.get(propKey);
  },
  set: function set($$obj, propKey, value) {
    return $$obj.set(propKey, value);
  },
  getKeys: function getKeys($$obj) {
    return $$obj.keySeq().toArray();
  },
  isObjectOrMap: function isObjectOrMap($$item) {
    return _immutable2.default.Map.isMap(item);
  },
  isArrayOrList: function isArrayOrList($$item) {
    return _immutable2.default.List.isList($$item);
  },
  push: function push($$arr, $$item) {
    return $$arr.push($$item);
  },
  clone: function clone($$obj) {
    return $$obj; // no need to clone since object is immutable
  }
};

exports.default = immutableConfig;