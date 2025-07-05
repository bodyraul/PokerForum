import React, {useRef,useState } from 'react'
import valideRecherche from "../fonction/ValideRecherche"
import BtnSujetAuteur from '../componentsResutilisable/Forum/BtnSujetAuteur';
import BtnPost from '../componentsResutilisable/Forum/BtnPost';
import AfficheCategorie from './AfficheCategorie';
import choiseCategoriesSearch from "../fonction/ChoiseCategoriesSearch"

export default function RechercheParCategorie({setlistePost,categories}) {
    const [boolCategorieSearch, setboolCategorieSearch] = useState(false);
    const inputSujet = useRef();
    const inputAuteur = useRef();
    const inputsearchSujetAuteur = useRef();
    const [recherchePost, setrecherchePost] = useState("");
    const [valueAuteurSujet, setvalueAuteurSujet] = useState("sujet");


    const cliqueCategories = ()=>{
        setboolCategorieSearch(!boolCategorieSearch);
    }

  return (
    <div className=" sup460:w-475  sup1256:w-11/12 sup1600:h-auto sup1600:flex sup1600:flex-row sup1600:items-center sup1600:justify-between sup1600:w-1400 py-2.5 px-0 h-80 mx-auto my-0 mt-24 flex flex-col-reverse items-center justify-evenly border-solid border border-gris w-full">
        <div>
          <div className="sup670:text-lg py-1 px-0 w-32 my-0 mx-4 bg-blanc text-vertFoncer border-solid border border-vertFoncer text-sm transition-all duration-200 ease-in-out flex items-center justify-around relative hover:cursor-pointer"
            onClick={cliqueCategories} 
          >
          <AfficheCategorie boolCategorieSearch={boolCategorieSearch} choiseCategoriesSearch={choiseCategoriesSearch} setlistePost={setlistePost} categories={categories}/>
            <span>Catégories</span>
            <img className="w-5" alt=""></img>
          </div>
        </div>
        <div className="sup460:w-4/5 sup670:w-auto sup670:justify-around flex items-center justify-evenly w-11/12">
          <input className="sup1256:ml-4 sup1256:p-1 sup670:text-base sup460:w-24 sup460:placeholder:text-xs sup670:placeholder:text-base sup670:w-auto w-20 text-base text-vertFoncer border-solid border border-vertFoncer pt-1 pr-0 pb-1 pl-1 ml-0 outline-vertFoncer placeholder:text-vertFoncer placeholder:text-xs"
            ref={inputsearchSujetAuteur} value={recherchePost} type="text" placeholder="Rechercher Sujet"
            onChange={(e) => {setrecherchePost(e.target.value);}}
          />
          <BtnSujetAuteur texte="Sujet" bg="bg-vertFoncer" color="text-blanc" valueAuteurSujet={valueAuteurSujet} inputAuteur={inputAuteur} inputSujet={inputSujet} inputsearchSujetAuteur={inputsearchSujetAuteur} setvalueAuteurSujet={setvalueAuteurSujet} />
          <BtnSujetAuteur texte="Auteur" bg="bg-blanc" color="text-vertFoncer" valueAuteurSujet={valueAuteurSujet} inputAuteur={inputAuteur} inputSujet={inputSujet} inputsearchSujetAuteur={inputsearchSujetAuteur} setvalueAuteurSujet={setvalueAuteurSujet} />
          <button className="sup670:ml-4 sup670:text-base text-xs bg-blanc text-vertFoncer border-solid border border-vertFoncer ml-0 p-1 hover:cursor-pointer"
            onClick={()=>valideRecherche(setlistePost,valueAuteurSujet,recherchePost,setrecherchePost)}>
            Rechercher
          </button>
        </div>
        <div className="sup990:w-auto w-full flex items-center justify-evenly">
          <BtnPost boolean={true} texte="Posts"/>
          <BtnPost boolean={false} texte="Nouveau post"/>
        </div>
      </div>
  )
}
