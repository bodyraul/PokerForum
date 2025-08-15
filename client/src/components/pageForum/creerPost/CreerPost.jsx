import React, { useState,useRef} from 'react'
import newPost from '../../../fonction/Newpost';
import RecherchePostMsg from '../../../componentsResutilisable/globale/RecherchePostMsg';
import AuthContext from '../../../Context/AuthContext';
import { useContext } from 'react';
import CreerTitrePost from './CreerTitrePost';
import ChoiseCategoriePost from './ChoiseCategoriePost';
import ErorMsgPost from './ErorMsgPost';


export default function CreerPost({categories,setlistePost,listePost,config} ) {
    
    const [valueTitrePost, setvalueTitrePost] = useState("");
    const [radioValue, setradioValue] = useState("");
    const errorMsgPost = useRef();
    const [errorMsgCreerPost, seterrorMsgCreerPost] = useState("");
    const{token} = useContext(AuthContext)

  return (
    <div className="sup1400:flex-row sup1400:items-start sup1400:justify-center sup1400:w-1400 w-full mt-24 mx-auto mb-0 flex flex-col items-center justify-center">
        <div className="creationPost sup990:w-11/12 bg-blanc py-7 px-6 w-full border-solid border-2 border-gris">
          <CreerTitrePost valueTitrePost={valueTitrePost} seterrorMsgCreerPost={seterrorMsgCreerPost} setvalueTitrePost={setvalueTitrePost} />
          <ChoiseCategoriePost categories={categories} setradioValue={setradioValue} />
          <ErorMsgPost errorMsgCreerPost={errorMsgCreerPost} errorMsgPost={errorMsgPost} />
          <button className="sup670:text-base text-sm py-3 px-4 text-vertFoncer border-solid border border-vertFoncer bg-blanc rounded-md transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertFoncer hover:text-blanc"
              onClick={()=>newPost(errorMsgPost,token,seterrorMsgCreerPost,config,radioValue,valueTitrePost,setlistePost,listePost,setradioValue,setvalueTitrePost )}>
            Créer
          </button>
        </div>
        <RecherchePostMsg texte="post"/>
      </div>
  )
}
