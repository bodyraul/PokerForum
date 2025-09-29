import React from 'react'
import tab from '../../tools/tab/TabLabelInputSignIn'
import { useContext } from 'react'
import SigneUpInContext from '../../Context/SIgneUpInContext'
import cacher from'../../assets/img/cacher.png'
import SigneInContext from '../../Context/SignInContext'

export default function InputSignIn({nb,seteur,value}) {
  const {errMsgNav,seterrMsgNav}=useContext(SigneUpInContext);
  const {mdpCacher,setmdpCacher}=useContext(SigneInContext);
  return (
    
    <p className='relative '>
      <input
        className=" sup480:text-[12px] sup480:mb-[25px] sup768:text-[14px] sup768:mb-[30px] sup1024:mb-[35px] sup1024:text-[16px] sup1600:text-[18px] sup1600:mb-[40px] text-[10px]  rounded-lg focus:outline-blanc focus:outline-double mb-[20px] py-[6px] pl-[6px] pr-[24px] border border-solid border-blanc text-blanc bg-vertFoncer placeholder:text-blanc"
        placeholder={tab.placerholder[nb]}
        autoComplete={nb===1? "current-password":"connect-mail"}
        type={mdpCacher ===true && nb===1? "password":"text"}
        onChange={(e)=>{seteur(e.target.value)}}
        onClick={()=>
          seterrMsgNav({
            ...errMsgNav,signIn:"",
          })
        }
        id={tab.id[nb]}
        value={value}
      />
      {nb===1?      
       <img src={cacher} onClick={()=>setmdpCacher(!mdpCacher)} className='sup480:w-[16px] sup768:w-[17px] sup768:top-[9px] sup1024:w-[18px] sup1024:top-[10px] sup1600:w-[20px] absolute top-[8px] right-[4px] w-[14px] hover:cursor-pointer ' alt="symbole cacher" />             
          :
        ""
      }
    </p>
  )
}
