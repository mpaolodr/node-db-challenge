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

module.exports = router;
