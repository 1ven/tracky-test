var chunks = require('chunks');

module.exports = chunks.methods("GET", req =>
  chunks.json(Promise.resolve([1, 2, 3]))
);