const db = require("../../data/db-config.js");

function get() {
  return db("projects");
}

function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getTasks(id) {
  return db("projects")
    .where({ id })
    .then(found => {
      if (found.length !== 0) {
        return db("tasks as t")
          .join("projects as p", "t.project_id", "p.id")
          .select(
            "p.name",
            "p.description",
            "t.description as task",
            "t.notes",
            "t.completed"
          )
          .where("t.project_id", id);
      }
    });
}

function getTasksForProject(id) {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select("t.id", "t.description", "t.notes", "t.completed")
    .where({ "t.project_id": id });
}

function add(data) {
  return db("projects")
    .insert(data, "id")
    .then(id => {
      return db("projects")
        .where({ id: id[0] })
        .first();
    });
}

function addTask(data, id) {
  return db("projects")
    .where({ id })
    .first()
    .then(project => {
      return db("tasks")
        .insert(data, "id")
        .then(added => {
          return db("tasks")
            .where({ id: added[0] })
            .first();
        });
    });
}

module.exports = {
  get,
  getById,
  getTasks,
  add,
  addTask,
  getTasksForProject
};
