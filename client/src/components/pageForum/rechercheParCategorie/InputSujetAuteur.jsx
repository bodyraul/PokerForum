import React from 'react'

export default function InputSujetAuteur({inputsearchSujetAuteur,recherchePost,setrecherchePost,seterrorMsgCategorie}) {
  return (
    <div className='sup480:w-[65%] sup1024:w-[73%] sup1600:w-[75%] w-[50%]'>
        <input className='sup480:text-[13px] sup768:text-[14px] sup1024:text-[15px] sup1600:text-[19px] w-full pl-[6px] outline-none text-vertFoncer text-[10px]'
        ref={inputsearchSujetAuteur} 
        value={recherchePost} 
        type="text" placeholder="Rechercher Sujet"
        onChange={(e) => {setrecherchePost(e.target.value);}}
        onClick={()=>seterrorMsgCategorie("")} 
        name='rechercheCategorie'
        />
    </div>
  )
}
