import React from 'react'
import { useNavigate } from 'react-router-dom';
import InfoPost from '../../../componentsResutilisable/Forum/InfoPost';

export default function ContentPost({listepost}) {
   const navigate = useNavigate();
    const accesPageMessagePost = (idPost) => {
        navigate(`/messagePost/${idPost}`);
    };
  return (
     <>
        {listepost.map((element) => {
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
                <InfoPost>{" "+element.nombreMessages}</InfoPost>
                <InfoPost>{" "+element.pseudoCreateur}</InfoPost>
                <InfoPost>{" "+element.dateCreation}</InfoPost>
            </div>
            <div className=" h-12 flex items-center bg-blanc text-vertFoncer ">
                <p className="sup670:text-base w-full px-8 text-sm line-clamp-2">
                {element.titre}
                </p>
            </div>
            </div>
        );
        })}
     </>
  )
}
