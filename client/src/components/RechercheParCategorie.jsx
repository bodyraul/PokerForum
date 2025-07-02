import React, { useEffect,useRef,useState } from 'react'
import axios from 'axios';
import valideRecherche from "../customHoocks/UseValideRecherche"
import cliqueSujet from '../fonction/CliqueSujet';
import cliqueAuteur from '../fonction/CliqueAuteur';
import choiseCategoriesSearch from "../fonction/ChoiseCategoriesSearch"

export default function RechercheParCategorie({setlistePost}) {
    const [boolCategorieSearch, setboolCategorieSearch] = useState(false);
    const [categories, setcategories] = useState([])
    const inputSujet = useRef();
    const inputAuteur = useRef();
    const inputsearchSujetAuteur = useRef();
    const [recherchePost, setrecherchePost] = useState("");
    const [valueAuteurSujet, setvalueAuteurSujet] = useState("sujet");


    const cliqueCategories = ()=>{
        setboolCategorieSearch(!boolCategorieSearch);
    }

    useEffect(() => {
    axios.get("http://localhost:5000/categorie/afficherAllCategories")
    .then((res) => setcategories(res.data))
    .catch((err) => console.log(err));
  }, [])

  return (
    <div className=" sup460:w-475  sup1256:w-11/12 sup1600:h-auto sup1600:flex sup1600:flex-row sup1600:items-center sup1600:justify-between sup1600:w-1400 py-2.5 px-0 h-80 mx-auto my-0 mt-24 flex flex-col-reverse items-center justify-evenly border-solid border border-gris w-full">
        <div>
          <div
            className="sup670:text-lg py-1 px-0 w-32 my-0 mx-4 bg-blanc text-vertFoncer border-solid border border-vertFoncer text-sm transition-all duration-200 ease-in-out flex items-center justify-around relative hover:cursor-pointer"
            onClick={cliqueCategories}
          >
           {boolCategorieSearch ? (
              <div
                className="absolute bg-blanc w-32  bottom-[-240px] z-10 p-0 border-solid border border-vertClair border-b-0 flex-col items-center justify-center"
       
              >
                {categories.map((element) => {
                  return (
                    <input
                      className="text-xs text-center text-blanc w-full h-12 border-solid border border-l-0 border-r-0 border-t-0 border-b-blanc bg-vertClair outline-none transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-blanc hover:text-vertClair hover:border-vertClair"
                      key={element._id}
                      onClick={(e)=> choiseCategoriesSearch(e,setlistePost)}
                      type="input"
                      defaultValue={element.titre}
                    />
                  );
                })}
              </div>
            ) : (
              ""
            )}
            <span>Catégories</span>
            <img className="w-5" alt=""></img>
          </div>
        </div>
        <div className="sup460:w-4/5 sup670:w-auto sup670:justify-around flex items-center justify-evenly w-11/12">
          <input
            className="sup1256:ml-4 sup1256:p-1 sup670:text-base sup460:w-24 sup460:placeholder:text-xs sup670:placeholder:text-base sup670:w-auto w-20 text-base text-vertFoncer border-solid border border-vertFoncer pt-1 pr-0 pb-1 pl-1 ml-0 outline-vertFoncer placeholder:text-vertFoncer placeholder:text-xs"
            ref={inputsearchSujetAuteur}
            value={recherchePost}
            onChange={(e) => {
              setrecherchePost(e.target.value);
            }}
            type="text"
            placeholder="Rechercher Sujet"
          />
          <button
            className="sup670:ml-4 sup670:text-base text-xs bg-vertFoncer text-blanc border-solid border border-vertFoncer ml-0 w-14  hover:cursor-pointer"
            ref={inputSujet}
            onClick={()=>cliqueSujet(valueAuteurSujet,inputAuteur,inputSujet,inputsearchSujetAuteur,setvalueAuteurSujet)}
          >
            Sujet
          </button>
          <button
            className="sup670:ml-4 sup670:text-base text-xs bg-blanc text-vertFoncer border-solid border border-vertFoncer ml-0 w-14  hover:cursor-pointer"
            ref={inputAuteur}
            onClick={()=>cliqueAuteur(valueAuteurSujet,inputAuteur,inputSujet,inputsearchSujetAuteur,setvalueAuteurSujet)}
          >
            Auteur
          </button>
          <button
            className="sup670:ml-4 sup670:text-base text-xs bg-blanc text-vertFoncer border-solid border border-vertFoncer ml-0 p-1 hover:cursor-pointer"
            onClick={()=>valideRecherche(setlistePost,valueAuteurSujet,recherchePost,setrecherchePost)}
          >
            Rechercher
          </button>
        </div>
        <div className="sup990:w-auto w-full flex items-center justify-evenly">
          <button
            className="sup1256:px-4 sup1256:py-3 sup990:py-3 sup990:px-3 sup990:ml-0 sup670:text-base mr-4 ml-5 py-1 px-7 border-solid text-vertClair border border-vertClair rounded-lg text-xs transition-all duration-300 ease-in-out hover:bg-vertClair hover:text-blanc hover:border-blanc hover:cursor-pointer "
         
          >
            Posts
          </button>
          <button
            className="sup1256:px-4 sup1256:py-3  sup990:py-3 sup990:px-3 sup670:text-base mr-5 py-1 px-7 border-solid text-vertClair border border-vertClair rounded-lg text-xs transition-all duration-300 ease-in-out hover:bg-vertClair hover:text-blanc hover:border-blanc hover:cursor-pointer "
     
          >
            Nouveau post
          </button>
        </div>
      </div>
  )
}
