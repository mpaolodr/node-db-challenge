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

function getProjectResources(id) {
  return db("project_resources as pr")
    .join("resources as r", "pr.resource_id", "r.id")
    .select("r.*")
    .where("pr.project_id", id);
}

function update(data, id) {
  return db("resources")
    .where({ id })
    .update(data)
    .then(updated => {
      return db("resources")
        .where({ id })
        .first();
    });
}

function remove(id) {
  return db("resources")
    .where({ id })
    .first()
    .then(resource => {
      return db("resources")
        .where({ id })
        .del()
        .then(deleted => {
          return resource;
        });
    });
}

module.exports = {
  get,
  add,
  getProjectResources,
  update,
  remove
};
