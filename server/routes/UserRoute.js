const express = require("express");
const router = express.Router();
const User = require("../model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



router.post("/register", async (req, res) => {
  try {
    const mail = await User.find().where("email").equals(req.body.email);
    const pseudonyme = await User.find()
      .where("pseudonyme")
      .equals(req.body.pseudonyme);
    if (mail.length && pseudonyme.length) {
      return res.status(404).json(`L'email et le pseudonyme existent déjà`);
    }
    if (mail.length) {
      return res.status(404).json(`L'email existe deja`);
    }
    if (pseudonyme.length) {
      return res.status(404).json("le pseudonyme est déjà utilisé");
    }
    const user = new User({
      prenom: req.body.prenom,
      pseudonyme: req.body.pseudonyme,
      nom: req.body.nom,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      bannis: req.body.bannis,
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("Adresse mail ou mot de passe incorrect");
    }

    const matchMpw = await bcrypt.compare(req.body.password, user.password);

    if (!matchMpw) {
      return res.status(404).json("Adresse mail ou mot de passe incorrect");
    }
    const token = jwt.sign(
      { id: user._id, role: user.role, bannis: user.bannis },
      process.env.PRIVATE_KEY
    );
     res.status(200).json({token:token,pseudonyme:user.pseudonyme});
  } catch (error) {
    res.status(500).json(error.message);
  }
});



module.exports = router;