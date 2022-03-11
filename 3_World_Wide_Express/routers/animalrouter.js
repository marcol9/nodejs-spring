const router = require("express").Router();

const { calculateFavAnimals } = require("../animals/animalsUtils.js");

router.get("/nooffavanimals", (req, res) => {
  res.send({ numberOfFav: calculateFavAnimals() });
});
router.get("/favanimals", (req, res) => {
  res.redirect("/nooffavanimals");
});
router.get("/cuteanimal", (req, res) => {
  if (req.query.cute === "Yes") {
    return res.send({ animal: "giraffe" });
  }
  res.send({ animal: "snake" });
});
module.exports = router;
