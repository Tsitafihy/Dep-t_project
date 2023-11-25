const {Router} = require("express");
const Carte = require('../controllers/Carte');

const router = Router();

router.get("/", Carte.getCartes);
router.get("/:id", Carte.getCarteById);
router.get("/search/:q", Carte.searchCarte);
router.get("/searchs/:annee_universitaire/:status", Carte.searchCarteTow);
router.post("/", Carte.addCarte);
router.put("/:id", Carte.updateCarte);
router.delete("/:id", Carte.removeCarte);
module.exports = router;