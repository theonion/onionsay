#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var onionsay = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(onionsay(input, options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    onionsay <string>',
      '    onionsay <string> --maxLength 8',
      '    echo <string> | onionsay',
      '',
      '  Example',
      '    onionsay "TU STULTUS ES"',
      onionsay('TU STULTUS ES')
    ].join('\n'));
  },
  version: pkg.version
});
