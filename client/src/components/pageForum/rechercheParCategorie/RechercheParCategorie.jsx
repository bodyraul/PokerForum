import React from 'react'
import BtnPost from '../../../componentsResutilisable/Forum/BtnPost';
import BtnCategorie from './BtnCategorie';
import RechercheSujetAuteur from './RechercheSujetAuteur';

export default function RechercheParCategorie({categories}) {
  return (
    <div className=" sup1024:w-[95%]   sup1024:h-auto sup1024:flex sup1024:flex-row sup1024:items-center sup1024:justify-between  py-2.5 px-0 h-[250px] mx-auto my-0 mt-24 flex flex-col-reverse items-center justify-evenly border-solid border border-gris w-full max-w-[1800px]">
        <BtnCategorie  categories={categories} />
        <RechercheSujetAuteur  />
        <div className="sup1024:w-[350px] w-full flex items-center justify-evenly ">
          <BtnPost nb={0}/>
          <BtnPost nb={1}/>
        </div>
      </div>
  )
}
