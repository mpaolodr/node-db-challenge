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

module.exports = router;
