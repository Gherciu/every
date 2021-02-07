#!/usr/bin/env node
const every = require('./index.js');

const parsedCommand = process.argv.filter((_, index) => index > 1);
const command = parsedCommand.join(' ');

every(command);
