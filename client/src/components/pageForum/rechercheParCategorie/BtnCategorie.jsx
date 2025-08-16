import React, {useState } from 'react'
import cliqueCategories from '../../../fonction/CliqueCategorie';
import choiseCategoriesSearch from '../../../fonction/ChoiseCategoriesSearch';
import AfficheCategorie from './AfficheCategorie';


export default function BtnCategorie({categories}) {
     const [boolCategorieSearch, setboolCategorieSearch] = useState(false);
  return (
    <div>
        <div className="sup670:text-lg py-1 px-0 w-32 my-0 mx-4 bg-blanc text-vertFoncer border-solid border border-vertFoncer text-sm transition-all duration-200 ease-in-out flex items-center justify-around relative hover:cursor-pointer"
        onClick={()=>cliqueCategories(setboolCategorieSearch,boolCategorieSearch)} 
        >
        <AfficheCategorie boolCategorieSearch={boolCategorieSearch} choiseCategoriesSearch={choiseCategoriesSearch} categories={categories}/>
        <span>Catégories</span>
        <img className="w-5" alt=""></img>
        </div>
    </div>
  )
}
