import React from 'react'
import ThemePost from '../componentsResutilisable/Forum/ThemePost';
import ContenuPost from '../componentsResutilisable/Forum/ContenuPost';
import { useNavigate } from 'react-router-dom';

export default function AfficherPost({listePost}) {
  const navigate = useNavigate();
  const accesPageMessagePost = (idPost) => {
    navigate(`/messagePost/${idPost}`);
  };
  return (
    <div className="sup990:w-11/12 sup1600:w-1400 w-full mt-0 mb-24 mx-auto   ">
        <div className=" h-12 flex items-center border-solid border border-gris bg-blanc text-vertFoncer font-bold ">
            <ThemePost>Catégorie</ThemePost>
            <ThemePost>Réponses</ThemePost>
            <ThemePost>Auteur</ThemePost>
            <ThemePost>Date</ThemePost>
        </div>
         {listePost.map((element) => {
          return (
            <div
              key={element._id}
              className="h-36 flex-col border-solid border border-gris bg-blanc text-xl hover:cursor-pointer"
              onClick={() => accesPageMessagePost(element._id)}
            >
              <div className=" h-12 flex items-center bg-blanc text-vertFoncer ">
                <div className="sup670:text-base w-1/4  text-vertClair text-xs  flex items-center justify-center">
                  <p className="w-auto bg-grisFonce text-center px-2 py-1">
                    {" "+element.categorie}
                  </p>
                </div>
                <ContenuPost>{" "+element.nombreMessages}</ContenuPost>
                <ContenuPost>{" "+element.pseudoCreateur}</ContenuPost>
                <ContenuPost>{" "+element.dateCreation}</ContenuPost>
              </div>
              <div className=" h-12 flex items-center bg-blanc text-vertFoncer ">
                <p className="sup670:text-base w-full px-8 text-sm line-clamp-2">
                  {element.titre}
                </p>
              </div>
            </div>
          );
        })}
      </div>
  )
}
