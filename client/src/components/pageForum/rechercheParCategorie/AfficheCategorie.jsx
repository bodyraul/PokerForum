import React from 'react'
import { useContext } from 'react';
import ListePostContext from '../../../Context/ListePostContext';

export default function AfficheCategorie({boolCategorieSearch,choiseCategoriesSearch,categories}) {
    const {setlistePost}=useContext(ListePostContext);
    if(boolCategorieSearch){
        return(
            <div className="absolute bg-blanc w-32  bottom-[-240px] z-10 p-0 border-solid border border-vertClair border-b-0 flex-col items-center justify-center">
                {categories.map((element) => {
                    return (
                    <input
                        className="text-xs text-center text-blanc w-full h-12 border-solid border border-l-0 border-r-0 border-t-0 border-b-blanc bg-vertClair outline-none transition-all duration-200 ease-in-out hover:cursor-pointer hover:bg-blanc hover:text-vertClair hover:border-vertClair"
                        key={element._id} onClick={(e)=> choiseCategoriesSearch(e,setlistePost)} type="input" defaultValue={element.titre}
                    />
                    );
                })}
            </div>
        )
    }
}
