var chunks = require("chunks");

module.exports = chunks.methods("GET", function(req) {
  return chunks.json(Promise.resolve([1, 2, 3]));
});
