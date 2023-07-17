const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/characters", controllers.getCharacters);
router.post("/", controllers.createCharacter);

router.use("*", (req, res) => {
  res.status(404).send("not found");
});

module.exports = router;
