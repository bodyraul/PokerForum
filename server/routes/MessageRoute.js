const express = require("express");
const router =express.Router();
const auth = require("../middleware/auth");
const MessagePost = require("../model/MessagePost");
const Message = require("../model/MessagePost");
const Post = require("../model/Post");
const User = require("../model/Users");



//route qui permet de créer un message
router.post("/creerMessage/:id",auth,async(req,res)=>{
    try {
        const idUser = req.payload.id;
        const idPost = req.params.id;
        if(!idUser){
            return res.json("vous devez être connecté pour envoyer un message sur un post.")
        }
        const verifIdPost = await Post.findOne({_id:idPost});
        
        if(!verifIdPost){
            return res.status(401).json("vous devez envoyer un message sur un poste existant ou créer un post.")
        }
        // ajout +1 du nombre de message du post 
        verifIdPost.nombreMessages +=1;

        var now = new Date();
        let annee=now.getFullYear();
        let mois=now.getMonth() + 1;
        let jour=now.getDate();
        let heure=now.getHours();
        let minute=now.getMinutes();
        let seconde=now.getSeconds();
        if(jour>0 && jour <10){
          jour = "0"+jour;
        }
        if(mois>0 && mois <10){
            mois ="0"+mois;
        }
        
        const dateCreation = ""+jour+"/"+mois+"/"+annee+"";
        const heureCreation = ""+heure+":"+minute+":"+seconde+"";

        await verifIdPost.save();

        const tab = await User.find({_id:idUser});
        
          const newMessage = new Message({
            "contenu" : req.body.contenu,
            "idUser" : idUser,
            "idPost" : idPost,
            "nomCreateurMessage" : tab[0].nom,
            "prenomCreateurMessage" : tab[0].prenom,
            "pseudoCreateurMessage" : tab[0].pseudonyme,
            "dateCreation":dateCreation,
            "heureCreation" : heureCreation,
        });
        await newMessage.save();
        res.json(newMessage);
    } catch (error) {
      res.status(500).json(error.message);
    }
  })


  //afficher tous les messages du post selectionné
  router.get("/messagePost/:id",async(req,res)=>{
    try {
      const idPost = req.params.id;
      const verifIdPost = await Post.findOne({_id:idPost});
      if(!verifIdPost){
        return res.status(401).json("Ce post n'existe pas");
    }
    const allMessagePost = await MessagePost.find({idPost:idPost});
      res.json(allMessagePost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  })


    module.exports = router;