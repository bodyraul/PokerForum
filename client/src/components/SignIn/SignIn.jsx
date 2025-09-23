import React from 'react'
import UseLoadSignIn from '../../customHoocks/nav/UseLoadSignIn'
import UseVariableSignIn from '../../customHoocks/signIn/UseVaribaleSignIn'
import PartLabelInputSignIn from './PartLabelInputSignIn'
import TopPartSignIn from './TopPartSignIn'
import SigneInContext from '../../Context/SignInContext'
import BottomPartSignIn from './BottomPartSignIn'

export default function SignIn() {
  const {formSignIn,email,setemail,password,setpassword,
  settoken,setpseudo,errorMsg,seterrorMsg,signIn,setSignIn} = UseVariableSignIn();

  UseLoadSignIn(signIn,formSignIn);
  
  return (
     <SigneInContext.Provider value={{email,setemail,password,setpassword,settoken,setpseudo,errorMsg,seterrorMsg,signIn,setSignIn}}>
      <form onSubmit={(e)=>e.preventDefault()} ref={formSignIn} className="sup480:w-[300px] sup480:p-[30px] sup768:w-[340px] sup768:p-[32px] sup1024:w-[380px] sup1600:w-[420px]  fixed top-[50%] left-[50%] w-[240px]  bg-vertFoncer z-50 -translate-y-2/4 -translate-x-2/4 rounded-3xl p-[28px] hidden flex-col items-center justify-between">
        <TopPartSignIn />
        <PartLabelInputSignIn />
        <BottomPartSignIn/>
      </form>
     </SigneInContext.Provider>
  )
}
