import React, {useState } from 'react'
import cliqueCategories from '../../../fonction/forum/CliqueCategorie';
import choiseCategoriesSearch from '../../../fonction/forum/ChoiseCategoriesSearch';
import AfficheCategorie from './AfficheCategorie';


export default function BtnCategorie() {
    const [boolCategorieSearch, setboolCategorieSearch] = useState(false);
  return (
    <div>
        <div className="sup480:text-[13px] sup480:w-[80px] sup480:pl-[8px] sup768:text-[14px] sup768:w-[90px] sup1024:text-[15px] sup1024:w-[94px] sup1600:text-[19px] sup1600:w-[110px] py-[4px]  w-[63px] my-0 mx-4 bg-blanc text-vertFoncer border-solid border border-vertFoncer text-[10px] transition-all duration-200 ease-in-out flex items-center justify-around relative hover:cursor-pointer "
        onClick={()=>{
          cliqueCategories(setboolCategorieSearch,boolCategorieSearch);
          }} >
        <AfficheCategorie boolCategorieSearch={boolCategorieSearch} choiseCategoriesSearch={choiseCategoriesSearch} />
        <span>Catégories</span>
        </div>
    </div>
  )
}
