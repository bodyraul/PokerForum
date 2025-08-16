import React, {useRef,useState } from 'react'
import BtnSujetAuteur from '../../../componentsResutilisable/Forum/BtnSujetAuteur';
import valideRecherche from '../../../fonction/ValideRecherche';
import { useContext } from 'react';
import ListePostContext from '../../../Context/ListePostContext';

export default function RechercheSujetAuteur() {
  const {setlistePost}=useContext(ListePostContext);
  const [recherchePost, setrecherchePost] = useState("");
  const [valueAuteurSujet, setvalueAuteurSujet] = useState("sujet");
  const inputSujet = useRef();const inputAuteur = useRef();
  const inputsearchSujetAuteur = useRef();
  return (
    <div className="sup460:w-4/5 sup670:w-auto sup670:justify-around flex items-center justify-evenly w-11/12">
        <input className="sup1256:ml-4 sup1256:p-1 sup670:text-base sup460:w-24 sup460:placeholder:text-xs sup670:placeholder:text-base sup670:w-auto w-20 text-base text-vertFoncer border-solid border border-vertFoncer pt-1 pr-0 pb-1 pl-1 ml-0 outline-vertFoncer placeholder:text-vertFoncer placeholder:text-xs"
        ref={inputsearchSujetAuteur} value={recherchePost} type="text" placeholder="Rechercher Sujet"
        onChange={(e) => {setrecherchePost(e.target.value);}}
        />
        <BtnSujetAuteur nb={0} valueAuteurSujet={valueAuteurSujet} inputAuteur={inputAuteur} inputSujet={inputSujet} inputsearchSujetAuteur={inputsearchSujetAuteur} setvalueAuteurSujet={setvalueAuteurSujet} />
        <BtnSujetAuteur nb={1} valueAuteurSujet={valueAuteurSujet} inputAuteur={inputAuteur} inputSujet={inputSujet} inputsearchSujetAuteur={inputsearchSujetAuteur} setvalueAuteurSujet={setvalueAuteurSujet} />
        <button className="sup670:ml-4 sup670:text-base text-xs bg-blanc text-vertFoncer border-solid border border-vertFoncer ml-0 p-1 hover:cursor-pointer"
        onClick={()=>valideRecherche(setlistePost,valueAuteurSujet,recherchePost,setrecherchePost)}>
        Rechercher
        </button>
    </div>
  )
}
