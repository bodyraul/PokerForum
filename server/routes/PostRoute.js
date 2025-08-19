const express = require("express");
const router =express.Router();
const Post = require("../model/Post");
const User = require("../model/Users");
const auth = require("../middleware/auth");


//route qui permet de créer un post
router.post("/creerPost",auth,async(req,res)=>{
   try {
    console.log(req.body);
    const user = req.payload.id;
    if(!user){
        return res.json("vous devez être connecté pour créer un post");
    }
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
    
    const tab = await User.find({_id : user});
    const post = new Post({
        "categorie":req.body.categorie,
        "titre":req.body.titre,
        "idUser":user,
        "prenomCreateur": tab[0].prenom,
        "nomCreateur" : tab[0].nom,
        "pseudoCreateur" : tab[0].pseudonyme,
        "dateCreation":dateCreation,
        "heureCreation" : heureCreation,
    })
    
    await post.save();    
    res.status(201).json(post);
   } catch (error) {
        res.status(500).json(error.message);
   }
});



//route qui permet de récupérer tous les posts
router.get("/",async(req,res)=>{
    try {
        // const post =await Post.find();
        const post = await Post.find ().sort ( {createdAt: -1} );
        res.json(post);
        
    } catch (error) {
        res.status(500).json(error.message);
    }
 });


 router.get("/lePoste/:id",async(req,res)=>{
    try {
        const idPost = req.params.id;
        const post =await Post.findOne({_id:idPost});
        const tab = [post];
        res.json(tab);
        
    } catch (error) {
        res.status(500).json(error.message);
    }

 })


 router.get("/posteParCategorie/:categorie",async(req,res)=>{
    try {
        const categorie = req.params.categorie;
        
        const allPost =await Post.find({categorie:categorie}).sort({createdAt:-1});
        res.json(allPost);
        
    } catch (error) {
        res.status(500).json(error.message);
    }

 })


  router.get("/recherchepostesParPseudo/:pseudoCreateur",async(req,res)=>{
    try {
        const pseudoCreateur = req.params.pseudoCreateur;
        const user =await User.findOne({pseudonyme:pseudoCreateur});
        if(!user){
            return res.status(404).json("L'utilisateur n'existe pas.");
        }
        const posts = await Post.find({pseudoCreateur:pseudoCreateur}).sort({createdAt:-1});
        res.json(posts);
        
    } catch (error) {
        res.status(500).json(error.message);
    }

 })

 //route qui permet de récupérer les post par une recherche de mot 
 router.get("/recherchepostesParmot/:mot",async(req,res)=>{
    try {
        const mot = req.params.mot;
        const posts = await Post.find({titre:{$regex:mot}}).sort({createdAt:-1});
        if(posts.length===0){
            return res.status(404).json("Ne correspond à aucun Post");
        }
        res.json(posts);
        
    } catch (error) {
        res.status(500).json(error.message);
    }

 })

module.exports = router;