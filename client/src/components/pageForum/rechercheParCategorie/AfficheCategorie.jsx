import React from 'react'
import { useContext } from 'react';
import ListePostContext from '../../../Context/ListePostContext';
import CategorieContext from '../../../Context/CategorieContext';
import PagePostContext from '../../../Context/PagePostContext';
import SpinnerContext from '../../../Context/SpinnerContext';

export default function AfficheCategorie({boolCategorieSearch,choiseCategoriesSearch}) {
    
    const {categories}=useContext(CategorieContext);
    const {setlistePost}=useContext(ListePostContext);
    const {setcurrentPage}=useContext(PagePostContext);
    const {setSpin}= useContext(SpinnerContext);

    if(boolCategorieSearch){
        return(
            <div className="sup480:bottom-[-131px] sup480:w-[80px] sup768:bottom-[-166px] sup768:w-[90px] sup1024:bottom-[-191px] sup1024:w-[94px] sup1600:bottom-[-202px] sup1600:w-[110px] absolute bg-blanc w-[63px] left-[-1px]  bottom-[-100px] z-10 p-0 border-solid border border-vertFoncer border-b-0 flex-col items-center justify-center">
                {categories.map((element) => {
                    return (
                    <input
                        className="sup480:text-[12px] sup480:h-[26px] sup768:text-[13px] sup768:h-[33px] sup1024:text-[14px] sup1024:h-[38px] sup1600:text-[15px] sup1600:h-[40px] text-[9px] text-center text-blanc w-full h-[20px] border-solid border border-l-0 border-r-0 border-t-0 border-b-blanc bg-vertFoncer outline-none transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-blanc hover:text-vertFoncer hover:border-vertFoncer "
                        key={element._id} type="input" defaultValue={element.titre}
                        onClick={(e)=> choiseCategoriesSearch(e,setlistePost,setcurrentPage,setSpin)}
                    />
                    );
                })}
            </div>
        )
    }
}
