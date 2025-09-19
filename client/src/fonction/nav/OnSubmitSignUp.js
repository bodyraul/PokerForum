import axios from "axios";
import resetSignUp from "./ResetSignUp";

export default function onSubmitsSignUp (seterrTypeSignUp,seterrNbSignUp,setvalueInputSignUp,valueInputSignUp,setSignUpProps,signUpProps,seterrorMsg,setSignInProps,signInProps,setmdpCacher){

  console.log("click")
    const user = {nom:valueInputSignUp.nom, prenom:valueInputSignUp.prenom, pseudonyme:valueInputSignUp.pseudonyme, email:valueInputSignUp.email, password:valueInputSignUp.password}
      axios.post("/user/register",user)
      .then((res)=>{
        setSignUpProps(!signUpProps);
        setSignInProps(!signInProps);
        seterrTypeSignUp({...resetSignUp("resetErrTypeSignUp")});
        seterrNbSignUp({...resetSignUp("resetErrNbSignUp")});
        setvalueInputSignUp({...resetSignUp("resetValueInput")});
        setmdpCacher({...resetSignUp("resetCacherMdp")});
        seterrorMsg("");
      })
      .catch((err)=>{
        if(err.response.status===404){
          console.log(err)
        }
      })
  }