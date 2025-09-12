import { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import CategorieContext from "../../Context/CategorieContext";
import PagePostContext from "../../Context/PagePostContext";
import ListePostContext from "../../Context/ListePostContext";
import SpinnerContext from "../../Context/SpinnerContext";
import { useEffect } from "react";

export default function UseVariableSearchSujetAuteur(){
    const {seterrorMsgCategorie}=useContext(CategorieContext);
    const {setcurrentPage}=useContext(PagePostContext);
    const {setlistePost}=useContext(ListePostContext);
    const [btnSujetAuteur, setbtnSujetAuteur] = useState(false);
    const [recherchePost, setrecherchePost] = useState("");
    const [valueAuteurSujet, setvalueAuteurSujet] = useState("sujet");
    const refBtnSujetAuteur = useRef("");
    const inputsearchSujetAuteur = useRef();
    const {setSpin}=useContext(SpinnerContext);

    useEffect(() => {
        if(btnSujetAuteur===false){
          refBtnSujetAuteur.current.style.display ="none";
        }
        if(btnSujetAuteur===true){
          refBtnSujetAuteur.current.style.display ="block";
        }
      }, [btnSujetAuteur])

    return {seterrorMsgCategorie,setcurrentPage,setlistePost,recherchePost,setrecherchePost,valueAuteurSujet,
        setvalueAuteurSujet,inputsearchSujetAuteur,setSpin,btnSujetAuteur,setbtnSujetAuteur,refBtnSujetAuteur}
}