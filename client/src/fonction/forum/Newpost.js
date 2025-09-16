import resetAllRadio from "./ResetAllRadio";
import GestionErrorMessagePost from "../gestionError/GestionErrorMessagePost";
import axios from "axios";

export default async function newPost (errorMsgPost,token,seterrorMsgCreerPost,config,radioValue,valueTitrePost,setlistePost,listePost,setradioValue,setvalueTitrePost,setcurrentPage,setcroissantCategorie,setcroissantAuteur,setcroissantDate,setcroissantReponse)  {

  const error =GestionErrorMessagePost(token,radioValue,errorMsgPost,seterrorMsgCreerPost,valueTitrePost);
  if (error===false){
    const newPost = {};
    newPost.categorie = radioValue;
    newPost.titre = valueTitrePost;

    await axios
      .post("/post/creerPost", newPost, config)
      .then((res) => {
        const trie = [...listePost]
        trie.sort((a, b) => new Date(b.dateCreation) - new Date(a.dateCreation));
        const trieDeux = [res.data,...trie]
        setlistePost([...trieDeux]);
        errorMsgPost.current.style.color = "#44ADA8";
        resetAllRadio();
        setcurrentPage(1);
        seterrorMsgCreerPost("Post créé avec succès.");
        setradioValue("");
        setcroissantAuteur(false);
        setcroissantCategorie(false);
        setcroissantReponse(false);
        setcroissantDate(true);
      })
      .catch((err) => console.log(err));
    setvalueTitrePost("");
    }
  };