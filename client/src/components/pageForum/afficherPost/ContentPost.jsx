import React from 'react'
import { useNavigate } from 'react-router-dom';
import InfoPost from '../../../componentsResutilisable/Forum/InfoPost';
import CategoriePost from './CategoriePost';

export default function ContentPost({listePost}) {

   const navigate = useNavigate();
    const accesPageMessagePost = (idPost) => {
        navigate(`/messagePost/${idPost}`);
    };
  return (
     <> 
        {listePost.map((element) => {
        return (
            <>
            <CategoriePost/>
            <div key={element._id} onClick={() => accesPageMessagePost(element._id)} className="sup480:h-[120px] sup480:mb-[50px] sup768:h-[140px] sup768:mb-[70px] sup1024:h-[160px] sup1024:mb-[90px] sup1600:h-[180px] sup1600:mb-[110px] h-[110px] flex-col border-solid border  border-gris bg-blanc text-xl hover:cursor-pointer mb-[30px] ">
                <div className=" h-[40px] flex items-end bg-blanc text-vertFoncer ">
                    <div className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] w-1/4  text-vertClair text-[10px] leading-[15px]  flex items-center justify-center">
                    <p className="w-auto bg-grisFonce text-center px-[8px] py-[4px]">
                        {" "+element.categorie}
                    </p>
                    </div>
                    <InfoPost>{" "+element.nombreMessages}</InfoPost>
                    <InfoPost>{" "+element.pseudoCreateur}</InfoPost>
                    <InfoPost>{" "+element.dateCreation}</InfoPost>
                </div>
                <div style={{borderBottom:"solid 1px",borderColor:"#e0e3e5"}} className=" sup480:h-[80px] sup768:h-[100px] sup1024:h-[120px] sup1600:h-[140px] h-[70px] flex items-center justify-center bg-blanc text-vertFoncer ">
                    <p className="sup480:text-[12px] sup480:w-[75%]  sup480:leading-[16px] sup768:leading-[21px] sup768:text-[14px] sup1024:leading-[27px] sup1024:text-[15px]  sup1600:text-[16px] sup1600:leading-[30px] w-[80%]  text-[10px] leading-[14px] line-clamp-2 bg-grisFonce text-vertFoncer ">
                    {element.titre}
                    </p>
                </div>
            </div>
             </>
        );
        })}
     </>
  )
}
