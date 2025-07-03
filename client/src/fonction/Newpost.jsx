import resetAllRadio from "./ResetAllRadio";
import axios from "axios";
export default async function newPost (config,radioValue,valueTitrePost,setlistePost,listePost,setradioValue,setvalueTitrePost)  {

    const newPost = {};
    newPost.categorie = radioValue;
    newPost.titre = valueTitrePost;

    await axios
      .post("http://localhost:5000/post/creerPost", newPost, config)
      .then((res) => {
        setlistePost([res.data, ...listePost]);
        resetAllRadio();
        setradioValue("");
      })
      .catch((err) => console.log(err));
    setvalueTitrePost("");
  };