import React, {useState } from 'react'
import cliqueCategories from '../../../fonction/forum/CliqueCategorie';
import choiseCategoriesSearch from '../../../fonction/forum/ChoiseCategoriesSearch';
import AfficheCategorie from './AfficheCategorie';
import arrow from "../../../assets/img/arrow.png"

export default function BtnCategorie() {
    const [boolCategorieSearch, setboolCategorieSearch] = useState(false);
  return (
    <div>
        <div className="sup480:text-[13px] sup480:w-[100px] sup768:text-[14px] sup768:w-[100px] sup1024:text-[15px] sup1024:w-[110px] sup1600:text-[19px] sup1600:w-[150px] py-[4px]  w-[90px] my-0 mx-4 bg-blanc text-vertFoncer border-solid border border-vertFoncer text-[10px] transition-all duration-200 ease-in-out flex items-center justify-around relative hover:cursor-pointer "
        onClick={()=>{
          cliqueCategories(setboolCategorieSearch,boolCategorieSearch);
          }} >
        <AfficheCategorie boolCategorieSearch={boolCategorieSearch} choiseCategoriesSearch={choiseCategoriesSearch} />
        <span className='text-center ' >Catégories</span>
        <img src={arrow} alt="" />
        </div>
    </div>
  )
}
