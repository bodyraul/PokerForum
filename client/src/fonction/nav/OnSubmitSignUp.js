import axios from "axios";
import gestionErrorInscription from "../gestionError/GestionErrorInscription";

export default function onSubmitsSignUp (nom,prenom,pseudonyme,email,password,confirmMdp,setSignUpProps,signUpProps,seterrorMsg,setSignInProps,signInProps,setnom,setprenom,setpseudonyme,setemail,setpassword,setconfirmMdp){

    const error=gestionErrorInscription(nom,prenom,pseudonyme,email,password,confirmMdp,seterrorMsg);

    if(error=== false){
      const user = {nom, prenom, pseudonyme, email, password}
      axios.post("http://localhost:5000/user/register",user)
      .then((res)=>{
        setSignUpProps(!signUpProps);
        setSignInProps(!signInProps);
        setemail("");
        setconfirmMdp("");
        setnom("");
        setprenom("");
        setpseudonyme("");
        setpassword("");
        seterrorMsg("");
      })
      .catch((err)=>{
        if(err.response.status===404){
          seterrorMsg(err.response.data)
        }
      })
    }
  }