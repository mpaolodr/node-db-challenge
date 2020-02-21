exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      description: "design API",
      notes: "write out resources and endpoints",
      project_id: 1,
      completed: true
    },
    {
      description: "Install needed dependencies",
      project_id: 1,
      completed: true
    },
    {
      description: "Setup server",
      notes: "separate index.js and server.js",
      project_id: 1,
      completed: false
    },
    {
      description: "Setup router",
      project_id: 1,
      completed: false
    },
    {
      description: "Create your endpoints",
      project_id: 1,
      completed: false
    },
    {
      description: "Download DBDesigner",
      project_id: 2,
      completed: true
    },
    {
      description: "Create and Account and Login",
      project_id: 2,
      completed: false
    },
    {
      description: "Create table for each resource",
      project_id: 2,
      completed: false
    },
    {
      description: "Identify releationship between each table",
      notes: "one to one? many to many? one to many?",
      project_id: 2,
      completed: false
    },
    {
      description: "Don't forget constraints",
      notes: "primary key and foreign keys",
      project_id: 2,
      completed: false
    },
    {
      description: "Create account with Heroku",
      notes: "you may have freebies from lambda",
      project_id: 3,
      completed: true
    },
    {
      description: "Connect your github account",
      notes: "necessary for continuous integration",
      project_id: 3,
      completed: true
    },
    {
      description: "Deploy",
      project_id: 3,
      completed: true
    },
    {
      description: "Extract repeated logic in your router",
      project_id: 4,
      completed: false
    },
    {
      description: "Create functions to replace extracted logic",
      notes: "create separate folder for middlewares",
      project_id: 4,
      completed: false
    },
    {
      description: "Import middlewares to your router",
      project_id: 4,
      completed: false
    },
    {
      description: "Download sqlite studio",
      project_id: 5,
      completed: false
    },
    {
      description: "Connect Database from your folder",
      project_id: 4,
      completed: false
    },
    {
      description: "Write your queries in sql editor",
      notes: "dont forget your semi-colon",
      project_id: 4,
      completed: false
    }
  ]);
};
