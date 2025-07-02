import React, { useContext,useEffect,useState } from 'react'
import axios from 'axios';
import AuthContext from '../Context/AuthContext';
import RechercheParCategorie from '../components/RechercheParCategorie';

export default function Forum() {
  const { token } = useContext(AuthContext);
  const [listePost, setlistePost] = useState([]);
  const [categories, setcategories] = useState([])
  const [radioValue, setradioValue] = useState("");
  const [valueTitrePost, setvalueTitrePost] = useState("");
  const creerPost = async () => {

    const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

    const newPost = {};
    newPost.categorie = radioValue;
    newPost.titre = valueTitrePost;

    await axios
      .post("http://localhost:5000/post/creerPost", newPost, config)
      .then((res) => {
        setlistePost([res.data, ...listePost]);
        AllRadioFalse();
        setradioValue("");
      })
      .catch((err) => console.log(err));
    setvalueTitrePost("");
  };

  function AllRadioFalse() {
      const allInputRadio = document.querySelectorAll(".inputRadio");
      allInputRadio.forEach((element) => {
        element.checked = false;
      });
    }

  async function gestionRadio(e) {
    AllRadioFalse();
    setradioValue(e.target.value);
    e.target.checked = true;
  }

  useEffect(() => {
    axios.get("http://localhost:5000/post")
    .then((res)=>setlistePost(res.data))
    .catch((err)=>console.log(err))

    axios.get("http://localhost:5000/categorie/afficherAllCategories")
    .then((res) => setcategories(res.data))
    .catch((err) => console.log(err));
  }, [])
  

  return (
    <div className="sup990:pt-44 w-[95%] pt-10 pb-[50px] my-0 mx-auto ">
      <p className="sup990:text-5xl text-center text-3xl text-vertFoncer">Forum</p>
      <RechercheParCategorie setlistePost={setlistePost} />
      <p className="sup990:text-xl flex items-center justify-center w-full my-0 mx-auto text-error text-sm h-12 ">
        {" "}
        {" "}
      </p>
      <div className="sup990:w-11/12 sup1600:w-1400 w-full mt-0 mb-24 mx-auto ">
        <div className=" h-12 flex items-center border-solid border border-gris bg-blanc text-vertFoncer font-bold ">
          <div className="sup670:text-base w-1/4 text-center text-xs">
            <p className="">Catégorie</p>
          </div>
          <p className="sup670:text-base w-1/4 text-center text-xs">Réponses</p>
          <p className="sup670:text-base w-1/4 text-center text-xs">Auteur</p>
          <p className="sup670:text-base w-1/4 text-center text-xs">Date</p>
        </div>
         {listePost.map((element) => {
          return (
            <div
              key={element._id}
              className="h-36 flex-col border-solid border border-gris bg-blanc text-xl hover:cursor-pointer"
            >
              <div class=" h-12 flex items-center bg-blanc text-vertFoncer ">
                <div class="sup670:text-base w-1/4  text-vertClair text-xs text-centerpy-1 flex items-center justify-center">
                  <p class="w-auto bg-grisFonce text-center px-2 py-1">
                    {" "}
                    {element.categorie}
                  </p>
                </div>
                <p class="sup670:text-base w-1/4 text-center text-xs text-vertClair">
                  {" "}
                  {element.nombreMessages}
                </p>
                <p class="sup670:text-base w-1/4 text-center text-xs text-vertClair">
                  {" "}
                  {element.pseudoCreateur}
                </p>
                <p class="sup670:text-base w-1/4 text-center text-xs text-vertClair">
                  {" "}
                  {element.dateCreation}
                </p>
              </div>
              <div class=" h-12 flex items-center bg-blanc text-vertFoncer ">
                <p class="sup670:text-base w-full px-8 text-sm line-clamp-2">
                  {element.titre}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sup1400:flex-row sup1400:items-start sup1400:justify-center sup1400:w-1400 w-full mt-24 mx-auto mb-0 flex flex-col items-center justify-center">
        <div className="sup990:w-11/12 bg-blanc py-7 px-6 w-full border-solid border-2 border-gris">
          <h1 className="sup670:text-4xl text-vertFoncer pb-6 text-2xl">
            Créer un nouveau Post.
          </h1>
          <p className="sup670:text-xl text-vertFoncer pb-6 text-base">
            Donnez votre point de vue sur un cas particulier.
          </p>
          <h3 className="sup670:text-base text-vertFoncer pb-5 pt-6 text-sm">
            Titre :{" "}
          </h3>
          <input
            className="sup670:placeholder:text-base sup460:w-96 outline-vertFoncer border-solid border border-vertFoncer text-vertFoncer py-3 px-2 w-full placeholder:text-sm"
            placeholder="Entrez votre titre"
            type="text"
            value={valueTitrePost}
            onChange={(e) => setvalueTitrePost(e.target.value)}
          />
          <h3 className="sup670:text-base text-sm text-vertFoncer pt-14 px-0 pb-4">
            Catégorie :{" "}
          </h3>
          <div className="sup670:pt-2 sup670:pr-0 sup670:pb-0 sup670:pl-0 sup460:w-96  pt-2 pr-2 pb-0 pl-0 flex-col items-center justify-between w-full">
             {categories.map((element) => {
              return (
                <p
                  class="sup670:text-base text-sm flex items-center justify-between w-full text-vertFoncer  pb-6"
                  key={element._id}
                >
                  <label htmlFor="">- {element.titre}</label>
                  <input
                    onClick={(e) => gestionRadio(e)}
                    className="inputRadio"
                    type="radio"
                    value={element.titre}
                  />
                </p>
              );
            })}
          </div>
          <p className="sup670:text-base text-sm h-12 text-error ">
            {" "}
            {" "}
          </p>
          <button
            className="sup670:text-base text-sm py-3 px-4 text-vertFoncer border-solid border border-vertFoncer bg-blanc rounded-md transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertFoncer hover:text-blanc"
              onClick={creerPost}
          >
            Créer
          </button>
        </div>
        <div className="sup1400:w-2/5 sup670:px-6 py-7 px-0 w-full flex-col items-center ">
          <div className=" sup1400:w-400 sup1400:ml-0 border-solid border-2 border-gris w-4/5 h-24 ml-8"></div>
          <h2 className="sup670:text-2xl sup1400:ml-0 ml-8 text-xl py-6 px-0 text-vertClair">
            Post similaire déjà créé?
          </h2>
          <p className="sup670:text-lg sup1400:ml-0 text-vertClair text-sm pb-6 ml-8">
            Faites une recherche par sujet,auteur ou catégorie.
          </p>
          <button
            className="sup990:py-3 sup670:text-base sup1400:ml-0 text-sm ml-8 w-44 py-2 px-0 text-vertClair border-solid border border-vertClair bg-blanc rounded transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertClair hover:text-blanc"
            
          >
            Accéder à la recherche
          </button>
        </div>
      </div>
    </div>
  )
}
