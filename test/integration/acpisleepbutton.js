'use strict';

var virtualbox = require('../../lib/virtualbox'),
  args = process.argv.slice(2);

virtualbox.acpisleepbutton(args[0], function (error) {
  if (error) {
    throw error;
  }
});
