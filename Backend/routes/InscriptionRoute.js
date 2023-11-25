const {Router} = require("express");
const Inscription = require('../controllers/Inscription');

const router = Router();

router.get("/", Inscription.getInscriptions);
router.get("/:id", Inscription.getInscriptionById);
router.get("/search/:q", Inscription.searchInscription);
// router.get("/searchs/:etat_payement/:date", Inscription.searchInscriptionTow);
router.post("/", Inscription.addInscription);
router.put("/id", Inscription.updateInscription);
router.delete("/:id", Inscription.removeInscription);
module.exports = router;