exports.up = function(knex) {
  return (
    knex.schema
      .createTable("projects", col => {
        col.increments();
        col
          .text("name", 255)
          .notNullable()
          .unique()
          .index();
        col.text("description");
        col.boolean("completed").defaultTo("false");
      })

      //   resources
      .createTable("resources", col => {
        col.increments();
        col
          .text("name", 255)
          .notNullable()
          .unique()
          .index();
        col.text("description");
      })

      //   tasks
      .createTable("tasks", col => {
        col.increments();
        col.text("description").notNullable();
        col.text("notes");
        col.boolean("completed").defaultTo("false");
        col
          .integer("project_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })

      //   project_resources
      .createTable("project_resources", col => {
        col.primary(["project_id", "resource_id"]);
        col
          .integer("project_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        col
          .integer("resource_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
