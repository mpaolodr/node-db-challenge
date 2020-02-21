const router = require("express").Router();

const Res = require("./resources-model.js");

router.get("/", async (req, res) => {
  try {
    const resources = await Res.get();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

router.post("/", async (req, res) => {
  const resData = req.body;

  if (resData.name) {
    try {
      const resource = await Res.add(resData);

      res.status(201).json(resource);
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  } else {
    res.status(400).json({ errorMessage: "Missing name field" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const resData = req.body;

  if (resData.name) {
    try {
      const updated = await Res.update(resData, id);
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ errorMessage: err.message });
    }
  } else {
    res.status(400).json({ errorMessage: "Missing name field" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Res.remove(id);

    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

module.exports = router;
