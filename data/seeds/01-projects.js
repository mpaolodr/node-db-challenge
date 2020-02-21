exports.seed = function(knex) {
  return knex("projects").insert([
    {
      name: "Build Api",
      description: "build RESTful API using express",
      completed: false
    },
    {
      name: "Data Modelling",
      description: "design database using DBdesigner",
      completed: true
    },
    {
      name: "Deploy API",
      description: "deploy API using heroku",
      completed: false
    },
    {
      name: "Middlewares",
      description: "create middlewares in a separate folder",
      completed: true
    },
    {
      name: "Make SQL Queries",
      description: "create and test SQL queries in sqlite studio",
      completed: false
    }
  ]);
};
