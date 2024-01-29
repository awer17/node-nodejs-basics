"use strict";

var _promises = _interopRequireDefault(require("fs/promises"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var create = function create() {
  var content, folderName, filename, fileFlag;
  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          content = 'I am fresh and young inside';
          folderName = 'files';
          filename = _path["default"].join(folderName, 'fresh.txt');
          fileFlag = true;
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(_promises["default"].access(filename));

        case 7:
          // If access does not throw an error, then the file exists
          console.log("File '".concat(filename, "' already exists. FS operation failed."));
          fileFlag = false;
          _context.next = 13;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);

        case 13:
          if (!fileFlag) {
            _context.next = 25;
            break;
          }

          _context.prev = 14;
          _context.next = 17;
          return regeneratorRuntime.awrap(_promises["default"].mkdir(folderName, {
            recursive: true
          }));

        case 17:
          _context.next = 19;
          return regeneratorRuntime.awrap(_promises["default"].writeFile(filename, content));

        case 19:
          console.log('File created successfully!');
          _context.next = 25;
          break;

        case 22:
          _context.prev = 22;
          _context.t1 = _context["catch"](14);
          console.error('Error creating file:', _context.t1);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 11], [14, 22]]);
}; // Call the create function


create();