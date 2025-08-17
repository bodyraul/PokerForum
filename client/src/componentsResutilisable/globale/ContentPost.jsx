import React from 'react'
import { useNavigate } from 'react-router-dom';
import InfoPost from '../Forum/InfoPost';


export default function ContentPost({listePost}) {

   const navigate = useNavigate();
    const accesPageMessagePost = (idPost) => {
        navigate(`/messagePost/${idPost}`);
    };
  return (
     <>
        {listePost.map((element) => {
        return (
            <div
            key={element._id}
            className="sup480:h-[110px] sup768:h-[120px] sup1024:h-[140px] sup1600:h-[160px] h-[100px] flex-col border-solid border border-gris bg-blanc text-xl hover:cursor-pointer"
            onClick={() => accesPageMessagePost(element._id)}
            >
            <div className=" h-12 flex items-center bg-blanc text-vertFoncer ">
                <div className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] w-1/4  text-vertClair text-[10px] leading-[15px]  flex items-center justify-center">
                <p className="w-auto bg-grisFonce text-center px-[8px] py-[4px]">
                    {" "+element.categorie}
                </p>
                </div>
                <InfoPost>{" "+element.nombreMessages}</InfoPost>
                <InfoPost>{" "+element.pseudoCreateur}</InfoPost>
                <InfoPost>{" "+element.dateCreation}</InfoPost>
            </div>
            <div className=" sup1024:h-[60px] sup1600:h-[80px] h-[48px] flex items-center justify-center bg-blanc text-vertFoncer ">
                <p className="sup480:text-[12px] sup480:w-[80%] sup480:leading-[16px] sup768:leading-[21px] sup768:text-[14px] sup1024:leading-[27px] sup1024:text-[15px]  sup1600:text-[16px] sup1600:leading-[30px] w-[85%]  text-[10px] leading-[14px] line-clamp-2">
                {element.titre}
                </p>
            </div>
            </div>
        );
        })}
     </>
  )
}
