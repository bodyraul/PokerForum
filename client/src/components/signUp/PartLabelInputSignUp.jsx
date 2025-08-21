import React from 'react'
import DivLabelSignUp from '../../componentsResutilisable/SignUp/DivLabelSignUp'
import DivInputSignUp from '../../componentsResutilisable/SignUp/DivInputSignUp'
import { useContext } from 'react'
import SigneUpContext from '../../Context/SignUpContext'

export default function PartLabelInputSignUp() {
    const{seterrorMsg,setnom,setprenom,setpseudonyme,setemail,setpassword,setconfirmMdp,nom,prenom,pseudonyme,email,password,confirmMdp}=useContext(SigneUpContext);
  return (
    <>
        <DivLabelSignUp nbUn={0} nbDeux={1}/>
        <DivInputSignUp nbUn={0} nbDeux={1} seterrorMsg={seterrorMsg} setUn={setnom} setDeux={setprenom} valueUn={nom} valueDeux={prenom}/>
        <DivLabelSignUp nbUn={2} nbDeux={3}/>
        <DivInputSignUp nbUn={2} nbDeux={3} seterrorMsg={seterrorMsg} setUn={setpseudonyme} setDeux={setemail} valueUn={pseudonyme} valueDeux={email}/>
        <DivLabelSignUp nbUn={4} nbDeux={5}/>
        <DivInputSignUp nbUn={4} nbDeux={5}  seterrorMsg={seterrorMsg} setUn={setpassword} setDeux={setconfirmMdp} valueUn={password} valueDeux={confirmMdp} />
    </>
  )
}
