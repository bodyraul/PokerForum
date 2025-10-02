import React from 'react'
import { useContext } from 'react';
import SigneUpContext from '../../Context/SignUpContext';
import valideNbMdp from '../../fonction/nav/ValideNbMdp';
import valideTypeMdp from '../../fonction/nav/ValideTypeMdp';
import valideConfirmMdp from '../../fonction/nav/ValideConfirmMdp';
import couleurSecuriteMdp from '../../fonction/nav/CouleurSecuriteMdp';
import cacher from '../../assets/img/cacher.png'
import cacherMdp from '../../fonction/nav/CacherMdp';
import cacherConfirmMdp from '../../fonction/nav/CacherConfirmMdp';
import SigneUpInContext from '../../Context/SIgneUpInContext';

export default function InputMdp() {
  const{valueInputSignUp,setvalueInputSignUp,errTypeSignUp, seterrTypeSignUp,errNbSignUp, seterrNbSignUp,setmdpCacher,mdpCacher}=useContext(SigneUpContext);
  const{errMsgNav, seterrMsgNav}=useContext(SigneUpInContext);
  return (
    <>
        <div className="w-full flex items-start justify-evenly">
            <p className='w-[40%] relative '>
              <input className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] pr-[30px] pl-[8px] py-[8px] w-[100%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
                placeholder="******"
                type={mdpCacher.mdp===true? "password":"text"}
                autoComplete='new-password'
                onChange={(e)=>{ 
                setvalueInputSignUp({...valueInputSignUp,password:e.target.value})
                valideTypeMdp(e,errTypeSignUp,seterrTypeSignUp);
                valideNbMdp(e,errNbSignUp,seterrNbSignUp);
                }}
                onClick={()=>seterrMsgNav({
                  ...errMsgNav,signUp:"",
                })}
                id="Mot de passe"
                value={valueInputSignUp.password}
              />
              <img onClick={()=>cacherMdp(mdpCacher,setmdpCacher)} src={cacher} className='sup480:w-[16px] sup768:w-[17px] sup768:top-[9px] sup1024:w-[18px] sup1024:top-[10px] sup1600:w-[20px] absolute top-[10px] right-[4px] w-[14px] hover:cursor-pointer ' alt="symbole cacher" />
            </p>
            <p className='w-[40%] relative '>
              <input className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] pr-[30px] pl-[8px] py-[8px] w-[100%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
                placeholder="******"
                type={mdpCacher.confirmMdp===true? "password":"text"}
                autoComplete='new-password'
                onChange={(e)=>{
                setvalueInputSignUp({...valueInputSignUp,confirmMdp:e.target.value})
                valideConfirmMdp(e,valueInputSignUp,seterrTypeSignUp,errTypeSignUp);
                }}
                onClick={()=>seterrMsgNav({
                  ...errMsgNav,signUp:"",
                })}
                id="Confirmation"
                value={valueInputSignUp.confirmMdp}
              />
              <img onClick={()=>cacherConfirmMdp(mdpCacher,setmdpCacher)} src={cacher} className='sup480:w-[16px] sup768:w-[17px] sup768:top-[9px] sup1024:w-[18px] sup1024:top-[10px] sup1600:w-[20px] absolute top-[10px] right-[4px] w-[14px] hover:cursor-pointer ' alt="symbole cacher" />
            </p>
        </div>
        

        <div className="sup480:text-[11px] sup768:text-[13px] sup1024:text-[15px] sup1600:text-[16px] text-[9px]  w-full flex items-start justify-evenly text-errorDeux">
            <div className='flex flex-col justify-start w-[40%] ' >
                <p className={`w-full ${couleurSecuriteMdp(errTypeSignUp)} text-vertFoncer text-center py-[5px] rounded-lg mb-[10px]`} >{errTypeSignUp.mdp}</p>
                <span className={`${errNbSignUp.mdp===true? "text-errorDeux":"text-valide"}`} >- 8 caractères minimum.</span>
            </div>
            <div className='flex flex-col justify-start w-[40%]' >
                <span className={`${errTypeSignUp.confirmMdp===true? "text-errorDeux":"text-valide"}`} >- Identique au mot de passe.</span>
            </div>
        </div>
    </>
  )
}
