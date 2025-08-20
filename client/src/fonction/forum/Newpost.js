import resetAllRadio from "./ResetAllRadio";
import GestionErrorMessagePost from "../gestionError/GestionErrorMessagePost";
import axios from "axios";

export default async function newPost (errorMsgPost,token,seterrorMsgCreerPost,config,radioValue,valueTitrePost,setlistePost,listePost,setradioValue,setvalueTitrePost,setcurrentPage)  {

  const error =GestionErrorMessagePost(token,radioValue,errorMsgPost,seterrorMsgCreerPost,valueTitrePost);
  if (error===false){
    const newPost = {};
    newPost.categorie = radioValue;
    newPost.titre = valueTitrePost;

    await axios
      .post("http://localhost:5000/post/creerPost", newPost, config)
      .then((res) => {
        setlistePost([res.data, ...listePost]);
        errorMsgPost.current.style.color = "#44ADA8";
        resetAllRadio();
        setcurrentPage(1);
        seterrorMsgCreerPost("Post créé avec succès.");
        setradioValue("");
      })
      .catch((err) => console.log(err));
    setvalueTitrePost("");
    }
  };