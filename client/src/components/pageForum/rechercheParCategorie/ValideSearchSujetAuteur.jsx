import React from 'react'
import valideRecherche from '../../../fonction/forum/ValideRecherche'
import loupe from "../../../assets/img/loupe.png"

export default function ValideSearchSujetAuteur({setlistePost,valueAuteurSujet,recherchePost,setrecherchePost,setcurrentPage,seterrorMsgCategorie,setSpin}) {
  return (
    <div className='sup480:w-[10%] sup1024:w-[7%] sup1600:w-[5%] w-[20%]'>
        <img onClick={()=>valideRecherche(setlistePost,valueAuteurSujet,recherchePost,setrecherchePost,setcurrentPage,seterrorMsgCategorie,setSpin)}  
        className='sup480:translate-y-[2px] sup1024:translate-y-[2px] sup1600:translate-y-[4px] translate-y-[1px] hover:cursor-pointer transform ' 
        src={loupe} alt="loupe" />
    </div>
  )
}
