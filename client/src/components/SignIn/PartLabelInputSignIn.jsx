import React from 'react'
import LabelSignIn from '../../componentsResutilisable/SignIn/LabelSignIn'
import InputSignIn from '../../componentsResutilisable/SignIn/InputSignIn'
import { useContext } from 'react'
import SigneInContext from '../../Context/SignInContext'

export default function PartLabelInputSignIn() {
  const {seterrorMsg,setemail,email,password,setpassword}=useContext(SigneInContext);
  return (
     <div className="sup480:mb-[7px] sup768:mb-[8px] sup1024:mb-[9px] sup1600:mb-[10px] w-full flex flex-col items-start justify-between mb-[6px]">
        <LabelSignIn nb={0}/>
        <InputSignIn nb={0} seterrorMsg={seterrorMsg}  seteur={setemail} value={email}/>
        <LabelSignIn nb={1}/>
        <InputSignIn nb={1} seterrorMsg={seterrorMsg}  seteur={setpassword} value={password}/>
    </div>
  )
}
