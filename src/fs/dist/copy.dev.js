"use strict";

var _promises = _interopRequireDefault(require("fs/promises"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var copy = function copy() {
  var sourcePath, destinationPath, files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, sourceFilePath, destinationFilePath;

  return regeneratorRuntime.async(function copy$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          sourcePath = 'files';
          destinationPath = 'files_copy'; //проверка коталогов

          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(_promises["default"].stat(sourcePath));

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](2);
          console.error('FS operation failed:', 'Source directory not found');
          return _context.abrupt("return");

        case 11:
          _context.prev = 11;
          _context.next = 14;
          return regeneratorRuntime.awrap(_promises["default"].stat(destinationPath));

        case 14:
          throw new Error('FS operation failed: Destination directory already exists');

        case 17:
          _context.prev = 17;
          _context.t1 = _context["catch"](11);

          if (!(_context.t1.code !== 'ENOENT')) {
            _context.next = 21;
            break;
          }

          throw _context.t1;

        case 21:
          _context.prev = 21;
          _context.next = 24;
          return regeneratorRuntime.awrap(_promises["default"].mkdir(destinationPath));

        case 24:
          _context.next = 26;
          return regeneratorRuntime.awrap(_promises["default"].readdir(sourcePath));

        case 26:
          files = _context.sent;
          // объект с именами файлами
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 30;
          _iterator = files[Symbol.iterator]();

        case 32:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 41;
            break;
          }

          file = _step.value;
          sourceFilePath = _path["default"].join(sourcePath, file);
          destinationFilePath = _path["default"].join(destinationPath, file);
          _context.next = 38;
          return regeneratorRuntime.awrap(_promises["default"].copyFile(sourceFilePath, destinationFilePath));

        case 38:
          _iteratorNormalCompletion = true;
          _context.next = 32;
          break;

        case 41:
          _context.next = 47;
          break;

        case 43:
          _context.prev = 43;
          _context.t2 = _context["catch"](30);
          _didIteratorError = true;
          _iteratorError = _context.t2;

        case 47:
          _context.prev = 47;
          _context.prev = 48;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 50:
          _context.prev = 50;

          if (!_didIteratorError) {
            _context.next = 53;
            break;
          }

          throw _iteratorError;

        case 53:
          return _context.finish(50);

        case 54:
          return _context.finish(47);

        case 55:
          console.log('Copy operation successful');
          _context.next = 61;
          break;

        case 58:
          _context.prev = 58;
          _context.t3 = _context["catch"](21);
          console.error('FS operation failed:', _context.t3.message);

        case 61:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 7], [11, 17], [21, 58], [30, 43, 47, 55], [48,, 50, 54]]);
};

copy()["catch"](function (err) {
  return console.error(err);
});