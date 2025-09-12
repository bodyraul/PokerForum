import React from 'react'
import BtnPost from '../../../componentsResutilisable/Forum/BtnPost';
import BtnCategorie from './BtnCategorie';
import RechercheSujetAuteur from './RechercheSujetAuteur';

export default function RechercheParCategorie() {
  
  return (
    <div className="sup480:mt-[60px] sup768:mt-[90px] sup1024:mt-[100px] sup1024:w-[95%] sup1024:h-auto sup1024:flex sup1024:flex-row sup1024:items-center sup1024:justify-between sup1600:mt-[120px] mt-[45px]  py-2.5 px-0 h-[275px] mx-auto my-0  flex flex-col-reverse items-center justify-evenly border-solid border border-gris w-full max-w-[1800px]">
        <BtnCategorie/>
        <RechercheSujetAuteur />
        <div className="sup1024:w-[350px] w-full flex items-center justify-evenly ">
          <BtnPost nb={0}/>
          <BtnPost nb={1}/>
        </div>
      </div>
  )
}
