const express = require("express")

const utilisateurController = require("../controllers/utilisateur.controller")
const router = express.Router();

// router.post("/inscription", utilisateurController.inscription)
router.post("/connexion", utilisateurController.connexion)
// router.put("/update/:id", utilisateurController.update)

module.exports = router;
