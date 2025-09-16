import React from 'react'
import UseLoadSignUp from '../../customHoocks/nav/UseLoadSignUp'
import UseVariableSignUp from '../../customHoocks/signUp/UseVariableSignUp'
import SigneUpContext from '../../Context/SignUpContext'
import TopPartSignUp from './TopPartSignUp'
import PartLabelInputSignUp from './PartLabelInputSignUp'
import BottomPartSignUp from './BottomPartSignUp'
import { useState } from 'react'

export default function SignUp() {

  const {signIn,setSignIn,signUp,setSignUp,nom,setnom,prenom,setprenom,pseudonyme,setpseudonyme,
    email,setemail,password,setpassword,confirmMdp,setconfirmMdp,errorMsg,seterrorMsg,formSignUp}= UseVariableSignUp();
    const [errorTypeNom, seterrorTypeNom] = useState(true);
    const [errorNbNom, seterrorNbNom] = useState(true);
    const [errorTypePrenom, seterrorTypePrenom] = useState(true);
    const [errorNbPrenom, seterrorNbPrenom] = useState(true);
    const [errorNbPseudo, seterrorNbPseudo] = useState(true);
    const [errorTypeMail, seterrorTypeMail] = useState(true);
    const [errorNbMail, seterrorNbMail] = useState(true);
    const [errorTypeMdp, seterrorTypeMdp] = useState("Sécurité faible");
    const [errorNbMdp, seterrorNbMdp] = useState(true);
    const [errorConfirmMdp, seterrorConfirmMdp] = useState(true);

    
  UseLoadSignUp(signUp,formSignUp);

  return (
   <SigneUpContext.Provider value={{signIn,setSignIn,signUp,setSignUp,nom,setnom,prenom,setprenom,pseudonyme,setpseudonyme,
    email,setemail,password,setpassword,confirmMdp,setconfirmMdp,errorMsg,seterrorMsg,seterrorTypeNom,errorTypeNom,errorNbNom, 
    seterrorNbNom,errorTypePrenom,seterrorTypePrenom,errorNbPrenom,seterrorNbPrenom,errorNbPseudo,seterrorNbPseudo,
    errorTypeMail,seterrorTypeMail,errorNbMail,seterrorNbMail,errorTypeMdp,seterrorTypeMdp,errorNbMdp,seterrorNbMdp,
    errorConfirmMdp,seterrorConfirmMdp}}>
       <form onSubmit={(e)=>e.preventDefault()} ref={formSignUp} className="sup377:w-[350px] sup480:h-[570] sup480:w-[400px] sup768:w-[470px] sup768:h-[620px]  sup1024:w-[530px] sup1024:h-[680px] sup1600:h-[750px] sup1600:w-[600px] fixed top-2/4 left-2/4 w-full h-[550px]  bg-vertFoncer z-50 -translate-x-2/4 -translate-y-2/4 rounded-3xl py-[39px] px-[12px] hidden flex-col items-center justify-between ">
        <TopPartSignUp/>
        <PartLabelInputSignUp/>
        <BottomPartSignUp/>
    </form>
   </SigneUpContext.Provider>
  )
}
