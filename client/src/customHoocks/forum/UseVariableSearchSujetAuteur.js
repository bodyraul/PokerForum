import { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import CategorieContext from "../../Context/CategorieContext";
import PagePostContext from "../../Context/PagePostContext";
import ListePostContext from "../../Context/ListePostContext";

export default function UseVariableSearchSujetAuteur(){
    const {seterrorMsgCategorie}=useContext(CategorieContext);
    const {setcurrentPage}=useContext(PagePostContext);
    const {setlistePost}=useContext(ListePostContext);
    const [recherchePost, setrecherchePost] = useState("");
    const [valueAuteurSujet, setvalueAuteurSujet] = useState("sujet");
    const inputSujet = useRef();
    const inputAuteur = useRef();
    const inputsearchSujetAuteur = useRef();

    return {seterrorMsgCategorie,setcurrentPage,setlistePost,recherchePost,setrecherchePost,valueAuteurSujet,
        setvalueAuteurSujet,inputSujet,inputAuteur,inputsearchSujetAuteur}
}