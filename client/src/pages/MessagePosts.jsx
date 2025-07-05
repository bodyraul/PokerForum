import React,{useEffect,useState,useRef} from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import axios from 'axios';
import ThemePost from '../componentsResutilisable/Forum/ThemePost';
import ContenuPost from '../componentsResutilisable/Forum/ContenuPost';

export default function MessagePosts() {
  const titrecontenu = useRef();
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [post, setpost] = useState({}); 
  const [message, setMessage] = useState([]); 
  const config = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    };

  useEffect(() => {
    async function message() {
      await axios
        .get(`http://localhost:5000/Message/messagePost/${id}`)
        .then((res) => {
          setMessage(res.data);
        })
        .catch((err) => console.log(err));
    }

    async function lePoste(params) {
      await axios
        .get(`http://localhost:5000/post/lePoste/${id}`, config)
        .then((res) => {
          setpost(res.data);
        })
        .catch((err) => console.log(err));
    }
     message();
     lePoste();

  }, [])
  
  return (
    <div class="sup990:mt-48 w-screen mt-10">
      <p class="sup670:text-4xl text-center text-2xl text-vertFoncer mt-12">
        {" "}
        Post selectionné
      </p>
      <div className="sup990:w-11/12 sup1600:w-1400 w-full mt-14 mb-12 mx-auto   ">
        <div className=" h-12 flex items-center border-solid border border-gris bg-blanc text-vertFoncer font-bold ">
            <ThemePost>Catégorie</ThemePost>
            <ThemePost>Réponses</ThemePost>
            <ThemePost>Auteur</ThemePost>
            <ThemePost>Date</ThemePost>
        </div>
        <div
            key={post._id}
            className="h-36 flex-col border-solid border border-gris bg-blanc text-xl hover:cursor-pointer"
          >
            <div className=" h-12 flex items-center bg-blanc text-vertFoncer ">
              <div className="sup670:text-base w-1/4  text-vertClair text-xs  flex items-center justify-center">
                <p className="w-auto bg-grisFonce text-center px-2 py-1">
                  {" "+post.categorie}
                </p>
              </div>
              <ContenuPost>{" "+post.nombreMessages}</ContenuPost>
              <ContenuPost>{" "+post.pseudoCreateur}</ContenuPost>
              <ContenuPost>{" "+post.dateCreation}</ContenuPost>
            </div>
            <div className=" h-12 flex items-center bg-blanc text-vertFoncer ">
              <p className="sup670:text-base w-full px-8 text-sm line-clamp-2">
                {post.titre}
              </p>
            </div>
          </div>
      </div>
      <div class="sup990:w-900 w-full mx-auto mt-12 mb-0">
        {message.map((element) => {
          return (
            <div
              key={element._id}
              class=" bg-blanc mb-7 p-9 border-solid border border-gris"
            >
              <div class="pb-5 text-vertClair font-bold flex items-center justify-between">
                <div class=" flex items-center justify-between">
                  {/* {afficheImgOnMajImg(element)} */}
                  <span className="sup670:text-base text-xs">
                    {" " + element.pseudoCreateurMessage}
                  </span>
                </div>
                <span className="sup670:text-base text-xs">
                  {element.dateCreation}
                </span>
              </div>
              <p className="VisibleContenu active" ref={titrecontenu}>
                {element.contenu}
                <span className="NoVisibleContenu"> {element.contenu} </span>
              </p>
            </div>
          );
        })}
      </div>
      <div className="sup1256:flex-row sup1256:items-start sup1256:justify-center sup1600:w-1400 w-full mx-auto mt-12 mb-0 flex flex-col items-start justify-center ">
        <div className="sup1256:ml-0 sup670:ml-14 sup1256::w-3/5 bg-blanc py-7 px-6 w-4/5 border-solid border-2 border-grisFonce ml-8">
          <h1 className="sup670:text-xl text-vertFoncer pb-6 text-base">
            Créer un nouveau Message.
          </h1>
          <p className="sup670:text-base text-vertFoncer text-xs pb-6">
            Essayez d'apporter quelque chose de nouveau à la conversation.
          </p>
          <h3 className=" sup670:text-base text-vertFoncer py-6 px-0 text-xs">
            Description
          </h3>
          <div className="pt-1 pb-6 px-0">
            <textarea
              className="sup1256:w-auto sup670:text-base w-full outline-vertFoncer border-solid border border-vertFoncer text-vertFoncer py-3 px-2 resize-none text-xs"
              // onClick={onclickTextArea}
              // value={valueMsgForm}
              // onChange={(e) => setvalueMsgForm(e.target.value)}
              rows={15}
              cols={80}
              name=""
              id=""
            ></textarea>
          </div>
          {/* <p className="text-error text-xl pb-6" ref={paraMessageErreur}>
            {" "}
            {messageErreur}{" "}
          </p> */}
          <button
            className="sup670:text-base text-xs py-3 px-4 text-vertFoncer border-solid border border-vertFoncer bg-blanc rounded-md transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertFoncer hover:text-blanc"
            // onClick={valideFormMessage}
          >
            Créer
          </button>
        </div>
        <div class="sup1256:w-2/5 sup670:px-6 py-7 px-0 w-full flex-col items-center ">
          <div class="sup670:w-96  sup1256:w-400 sup1400:ml-0 border-solid border-2 border-gris w-52 h-24 ml-8"></div>
          <h2 class="sup670:text-2xl sup1400:ml-0 ml-8 text-xl py-6 px-0 text-vertClair">
            Post similaire déjà créé?
          </h2>
          <p class="sup670:text-lg sup1400:ml-0 text-vertClair text-sm pb-6 ml-8">
            Faites une recherche par sujet,auteur ou catégorie.
          </p>
          <button
            class="sup990:py-3 sup670:text-base sup1400:ml-0 text-sm ml-8 w-44 py-2 px-0 text-vertClair border-solid border border-vertClair bg-blanc rounded transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-vertClair hover:text-blanc"
            // onClick={() => navigate("/")}
          >
            Accéder à la recherche
          </button>
        </div>
      </div>
    </div>
  )
}
