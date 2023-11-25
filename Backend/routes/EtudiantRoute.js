const {Router} = require("express");
const Etudiant = require('../controllers/Etudiant');

const router = Router();

router.get("/", Etudiant.getEtudiants);
router.get("/:id", Etudiant.getEtudiantById);
router.get("/search/:q", Etudiant.searchEtudiant);
router.post("/", Etudiant.addEtudiant);
router.put("/id", Etudiant.updateEtudiant);
router.delete("/:id", Etudiant.removeEtudiant);
module.exports = router;