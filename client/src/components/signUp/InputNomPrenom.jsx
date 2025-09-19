import React from 'react'
import valideNom from '../../fonction/nav/ValideNom';
import validePrenom from '../../fonction/nav/ValidePrenom';
import { useContext } from 'react';
import SigneUpContext from '../../Context/SignUpContext';

export default function InputNomPrenom() {

    const{seterrorMsg,valueInputSignUp,setvalueInputSignUp,errTypeSignUp, seterrTypeSignUp,errNbSignUp, seterrNbSignUp}=useContext(SigneUpContext);

  return (
    <>
        <div className="w-full flex items-start justify-evenly">
            <input
            className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
            placeholder="exemple : Peria"
            type="text"
            onChange={(e)=>{
                setvalueInputSignUp({...valueInputSignUp,nom:e.target.value});
                valideNom(e,errTypeSignUp,seterrTypeSignUp,errNbSignUp,seterrNbSignUp);
            }}
            onClick={()=>seterrorMsg("")}
            id="Nom"
            value={valueInputSignUp.nom}
            />
            <input
            className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
            placeholder="exemple : Aurélien"
            type="text"
            onChange={(e)=>{
                setvalueInputSignUp({...valueInputSignUp,prenom:e.target.value})
                validePrenom(e,errTypeSignUp,seterrTypeSignUp,errNbSignUp,seterrNbSignUp);
            }}
            onClick={()=>seterrorMsg("")}
            id="Prenom"
            value={valueInputSignUp.prenom}
            />
        </div>


        <div className={`w-full flex items-start justify-evenly  `}>
            <div className='flex flex-col justify-start w-[40%]'>
                <span className={`${errTypeSignUp.nom===true? "text-errorDeux":"text-valide"}`} >- Ne contient que des lettres.</span>
                <span className={`${errNbSignUp.nom===true? "text-errorDeux":"text-valide"}`} >- 2 caractères minimum.</span>
                </div>
            <div className='flex flex-col justify-start w-[40%]' >
                <span className={`${errTypeSignUp.prenom===true? "text-errorDeux":"text-valide"}`} >- Ne contient que des lettres.</span>
                <span className={`${errNbSignUp.prenom===true? "text-errorDeux":"text-valide"}`} >- 2 caractères minimum.</span>
            </div>
        </div>
    </>
  )
}
