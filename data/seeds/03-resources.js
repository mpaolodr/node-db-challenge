exports.seed = function(knex) {
  return knex("resources").insert([
    {
      name: "computer",
      description: "super old one"
    },
    {
      name: "projector",
      description: "super blurred"
    },
    {
      name: "whiteboard"
    },
    {
      name: "stack overflow",
      description: "cheatsheet"
    },
    {
      name: "github",
      description: "version control"
    },
    {
      name: "internet"
    },
    {
      name: "logic",
      description: "needed for the most part"
    },
    {
      name: "sqlite studio"
    },
    {
      name: "DB designer"
    },
    {
      name: "Heroku Account"
    },
    {
      name: "NodeJs",
      description: "needed to install dependencies"
    }
  ]);
};
