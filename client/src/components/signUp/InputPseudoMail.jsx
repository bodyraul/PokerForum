import React from 'react'
import validePseudo from '../../fonction/nav/ValidePseudo';
import valideMail from '../../fonction/nav/ValideMail';
import { useContext } from 'react';
import SigneUpContext from '../../Context/SignUpContext';

export default function InputPseudoMail() {

    const{seterrorMsg,valueInputSignUp,setvalueInputSignUp,errTypeSignUp, seterrTypeSignUp,errNbSignUp, seterrNbSignUp}=useContext(SigneUpContext);

  return (
    <>
        <div className="w-full flex items-start justify-evenly">
            <input
                className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
                placeholder="exemple : $pider95"
                type="text"
                onChange={(e)=>{
                setvalueInputSignUp({...valueInputSignUp,pseudonyme:e.target.value});
                validePseudo(e,errNbSignUp,seterrNbSignUp);
                }}
                onClick={()=>seterrorMsg("")}
                id="Pseudonyme"
                value={valueInputSignUp.pseudonyme}
            />
            <input
                className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
                placeholder="texte@exemple.com"
                type="email"
                autoComplete='username'
                onChange={(e)=>{
                setvalueInputSignUp({...valueInputSignUp,email:e.target.value})
                valideMail(e,errTypeSignUp,seterrTypeSignUp,errNbSignUp,seterrNbSignUp);
                }}
                onClick={()=>seterrorMsg("")}
                id="Mail"
                value={valueInputSignUp.email}
            />
        </div>
               
        
        <div className="w-full flex items-start justify-evenly text-errorDeux">
            <div className='flex flex-col justify-start w-[40%]' >
                <span className={`${errNbSignUp.pseudo===true? "text-errorDeux":"text-valide"}`}  >- 2 caractères minimum.</span>
            </div>
            <div className='flex flex-col justify-start w-[40%]' >
                <span className={`${errTypeSignUp.mail===true? "text-errorDeux":"text-valide"}`} >- Doit être de type Mail.</span>
                <span className={`${errNbSignUp.mail===true? "text-errorDeux":"text-valide"}`} >- 5 caractères minimum.</span>
            </div>
        </div>
    </>
  )
}
