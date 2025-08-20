import React from 'react'
import InfoPost from '../../../componentsResutilisable/Forum/InfoPost'

export default function TopContenuPostMsg({element}) {
  return (
    <div className="sup480:mb-[25px] sup768:mb-[30px] sup1024:mb-[38px] sup1600:mb-[45px] mb-[20px] flex items-center bg-blanc text-vertFoncer ">
        <div className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] w-1/4  text-vertClair text-[10px] leading-[15px]  flex items-center justify-center">
        <p className="w-auto bg-grisFonce text-center px-[8px] py-[4px]">
            {" "+element.categorie}
        </p>
        </div>
        <InfoPost>{" "+element.nombreMessages}</InfoPost>
        <InfoPost>{" "+element.pseudoCreateur}</InfoPost>
        <InfoPost>{" "+element.dateCreation}</InfoPost>
    </div>
)
}
