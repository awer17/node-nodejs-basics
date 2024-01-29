"use strict";

var _promises = _interopRequireDefault(require("fs/promises"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var create = function create() {
  var content, filename, shouldCreateFile;
  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          content = 'I am fresh and young inside';
          filename = 'fresh.txt';
          shouldCreateFile = true;
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(_promises["default"].access(filename));

        case 6:
          // If access does not throw an error, then the file exists
          console.log("File '".concat(filename, "' already exists. FS operation failed."));
          shouldCreateFile = false;
          _context.next = 12;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](3);

        case 12:
          if (!shouldCreateFile) {
            _context.next = 22;
            break;
          }

          _context.prev = 13;
          _context.next = 16;
          return regeneratorRuntime.awrap(_promises["default"].writeFile(filename, content));

        case 16:
          console.log('File created successfully!');
          _context.next = 22;
          break;

        case 19:
          _context.prev = 19;
          _context.t1 = _context["catch"](13);
          console.error('Error creating file:', _context.t1);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 10], [13, 19]]);
}; // Call the create function


create();