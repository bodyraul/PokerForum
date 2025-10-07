import axios from "axios";
import resetSignUp from "./ResetSignUp";

export default function onSubmitsSignUp (seterrTypeSignUp,seterrNbSignUp,setvalueInputSignUp,valueInputSignUp,setSignUpProps,signUpProps,errMsgNav,seterrMsgNav,setSignInProps,signInProps,setmdpCacher){

    const user = {nom:valueInputSignUp.nom, prenom:valueInputSignUp.prenom, pseudonyme:valueInputSignUp.pseudonyme, email:valueInputSignUp.email, password:valueInputSignUp.password}
      axios.post("/user/register",user)
      .then((res)=>{
        setSignUpProps(!signUpProps);
        setSignInProps(!signInProps);
        seterrTypeSignUp({...resetSignUp("resetErrTypeSignUp")});
        seterrNbSignUp({...resetSignUp("resetErrNbSignUp")});
        setvalueInputSignUp({...resetSignUp("resetValueInput")});
        setmdpCacher({...resetSignUp("resetCacherMdp")});
        seterrMsgNav({
          ...errMsgNav,signUp:"",signIn:"inscription validé, connectez-vous!"
        });
      })
      .catch((err)=>{
        if(err.response.status===404){
          seterrMsgNav({
          ...errMsgNav,signUp:err.response.data
        });
        }
      })
  }