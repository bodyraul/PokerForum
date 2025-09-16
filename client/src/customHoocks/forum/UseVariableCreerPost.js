import { useContext } from "react";
import { useState } from "react";
import PagePostContext from "../../Context/PagePostContext";
import ListePostContext from "../../Context/ListePostContext";
import AuthContext from "../../Context/AuthContext";
import { useRef } from "react";
import TrieContext from "../../Context/TrieContext";

export default function UseVariableCreerPost(){
    const{setcurrentPage}=useContext(PagePostContext);
    const [valueTitrePost, setvalueTitrePost] = useState("");
    const [radioValue, setradioValue] = useState("");
    const errorMsgPost = useRef();
    const [errorMsgCreerPost, seterrorMsgCreerPost] = useState("");
    const {token} = useContext(AuthContext);
    const {listePost,setlistePost}=useContext(ListePostContext);
    const {setcroissantCategorie,setcroissantAuteur,setcroissantDate,setcroissantReponse}=useContext(TrieContext);
    return {setcurrentPage,valueTitrePost,setvalueTitrePost,radioValue,setradioValue,errorMsgPost,errorMsgCreerPost,
        seterrorMsgCreerPost,token,listePost,setlistePost,setcroissantCategorie,setcroissantAuteur,setcroissantDate,setcroissantReponse}
}