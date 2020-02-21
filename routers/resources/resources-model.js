const db = require("../../data/db-config.js");

function get() {
  return db("resources");
}

function add(data) {
  return db("resources")
    .insert(data)
    .then(id => {
      return db("resources")
        .where({ id: id[0] })
        .first();
    });
}

module.exports = {
  get,
  add
};
