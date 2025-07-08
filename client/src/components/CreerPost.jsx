import React, { useState,useRef} from 'react'
import newPost from '../fonction/Newpost';
import BtnRadio from '../componentsResutilisable/Forum/BtnRadio';
import ParaNewPost from '../componentsResutilisable/Forum/ParaNewPost';
import RecherchePost from './RecherchePost';
import AuthContext from '../Context/AuthContext';
import { useContext } from 'react';

export default function CreerPost({categories,setlistePost,listePost,config} ) {
    
    const [valueTitrePost, setvalueTitrePost] = useState("");
    const [radioValue, setradioValue] = useState("");
    const errorMsgPost = useRef();
    const [errorMsgCreerPost, seterrorMsgCreerPost] = useState("");
    const{token,settoken} = useContext(AuthContext)
  return (
    <div className="sup1400:flex-row sup1400:items-start sup1400:justify-center sup1400:w-1400 w-full mt-24 mx-auto mb-0 flex flex-col items-center justify-center">
        <div className="sup990:w-11/12 bg-blanc py-7 px-6 w-full border-solid border-2 border-gris">
          <ParaNewPost textresponsive="4xl" texte="2xl"> Créer un nouveau Post.</ParaNewPost>
          <ParaNewPost textresponsive="xl" texte="base"> Donnez votre point de vue sur un cas particulier.</ParaNewPost>
          <ParaNewPost textresponsive="base" texte="sm"> Titre :</ParaNewPost>
          <input className="sup670:placeholder:text-base sup460:w-96 outline-vertFoncer border-solid border border-vertFoncer text-vertFoncer py-3 px-2 w-full placeholder:text-sm"
            placeholder="Entrez votre titre"type="text" value={valueTitrePost} 
            onChange={(e) => setvalueTitrePost(e.target.value)}  onClick={() => seterrorMsgCreerPost("")}
          />
          <h3 className="sup670:text-base text-sm text-vertFoncer pt-14 px-0 pb-4">
            Catégorie :{" "}
          </h3>
          <BtnRadio categories={categories} setradioValue={setradioValue} ></BtnRadio>
          <p ref={errorMsgPost} className="sup670:text-base text-sm h-12 text-error ">
            {" "}
            {errorMsgCreerPost}{" "}
          </p>
          <button className="sup670:text-base text-sm py-3 px-4 text-vertFoncer border-solid border border-vertFoncer bg-blanc rounded-md transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertFoncer hover:text-blanc"
              onClick={()=>newPost(errorMsgPost,token,seterrorMsgCreerPost,config,radioValue,valueTitrePost,setlistePost,listePost,setradioValue,setvalueTitrePost )}>
            Créer
          </button>
        </div>
        <RecherchePost/>
      </div>
  )
}
