"use strict";

var _promises = _interopRequireDefault(require("fs/promises"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var create = function create() {
  var content, folderName, filename;
  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          content = 'I am fresh and young inside';
          folderName = 'files';
          filename = _path["default"].join(folderName, 'fresh.txt');
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(_promises["default"].access(filename));

        case 6:
          console.log("File '".concat(filename, "' already exists. FS operation failed."));
          _context.next = 20;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          _context.prev = 11;
          _context.next = 14;
          return regeneratorRuntime.awrap(_promises["default"].writeFile(filename, content));

        case 14:
          console.log('File created successfully!');
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t1 = _context["catch"](11);
          console.error('Error creating file:', _context.t1);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 9], [11, 17]]);
};

create();