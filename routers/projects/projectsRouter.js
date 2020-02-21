const router = require("express").Router();

const Proj = require("./projects-model.js");

router.get("/", async (req, res) => {
  try {
    const projects = await Proj.get();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

router.get("/:id/tasks", async (req, res) => {
  const { id } = req.params;

  try {
    const tasks = await Proj.getTasks(id);

    if (tasks) {
      res.status(200).json(tasks);
    } else {
      res.status(400).json({ errorMessage: "Invalid porject ID" });
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

router.post("/", async (req, res) => {
  const projData = req.body;

  if (projData.name) {
    try {
      const project = await Proj.add(projData);
      res.status(201).json(project);
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  } else {
    res.status(400).json({ errorMessage: "Missing name field" });
  }
});

router.post("/:id/tasks", async (req, res) => {
  const { id } = req.params;
  const taskData = { ...req.body, project_id: id };

  if (taskData.description) {
    try {
      const task = await Proj.addTask(taskData, id);
      res.status(201).json(task);
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  } else {
    res.status(400).json({ errorMessage: "Missing description field" });
  }
});

module.exports = router;
