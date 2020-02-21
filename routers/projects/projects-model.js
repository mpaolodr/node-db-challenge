const db = require("../../data/db-config.js");

function get() {
  return db("projects");
}

function add(data) {
  return db("projects")
    .insert(data)
    .then(id => {
      return db("projects")
        .where({ id: id[0] })
        .first();
    });
}

module.exports = {
  get,
  add
};
