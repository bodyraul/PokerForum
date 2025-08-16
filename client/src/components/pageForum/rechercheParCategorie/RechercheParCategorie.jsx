import React from 'react'
import BtnPost from '../../../componentsResutilisable/Forum/BtnPost';
import BtnCategorie from './BtnCategorie';
import RechercheSujetAuteur from './RechercheSujetAuteur';

export default function RechercheParCategorie({categories}) {
  return (
    <div className=" sup460:w-475  sup1256:w-11/12 sup1600:h-auto sup1600:flex sup1600:flex-row sup1600:items-center sup1600:justify-between sup1600:w-1400 py-2.5 px-0 h-80 mx-auto my-0 mt-24 flex flex-col-reverse items-center justify-evenly border-solid border border-gris w-full">
        <BtnCategorie  categories={categories} />
        <RechercheSujetAuteur  />
        <div className="sup990:w-auto w-full flex items-center justify-evenly">
          <BtnPost nb={0}/>
          <BtnPost nb={1}/>
        </div>
      </div>
  )
}
