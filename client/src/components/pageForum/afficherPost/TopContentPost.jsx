import React from 'react'
import InfoPost from '../../../componentsResutilisable/Forum/InfoPost'

export default function TopContentPost({element}) {
  return (
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
  )
}
