const express = require("express");
const router = express.Router();
const Categories = require("../model/Categorie");

// creer des categories
router.post("/creerCategorie", async (req, res) => {
  try {
    const categorie = new Categories({
      titre: req.body.titre,
      contenu: req.body.contenu,
    });
    await categorie.save();
    res.json(categorie);
  } catch (error) {
    res.status(500).json(error.Message);
  }
});

router.get("/afficherAllCategories", async (req, res) => {
  try {
    const categories = await Categories.find().sort({ nombrePost: -1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json(error.Message);
  }
});

module.exports = router;