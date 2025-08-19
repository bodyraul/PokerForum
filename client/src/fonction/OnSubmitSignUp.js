import axios from "axios";
import gestionErrorInscription from "./GestionErrorInscription";

export default function onSubmitsSignUp (nom,prenom,pseudonyme,email,password,confirmMdp,setSignUpProps,signUpProps,seterrorMsg,setSignInProps,signInProps){

    const error=gestionErrorInscription(nom,prenom,pseudonyme,email,password,confirmMdp,seterrorMsg);

    if(error=== false){
      const user = {nom, prenom, pseudonyme, email, password}
      axios.post("http://localhost:5000/user/register",user)
      .then((res)=>{
        setSignUpProps(!signUpProps);
        setSignInProps(!signInProps);
      })
      .catch((err)=>{
        if(err.response.status===404){
          seterrorMsg(err.response.data)
        }
      })
    }
  }