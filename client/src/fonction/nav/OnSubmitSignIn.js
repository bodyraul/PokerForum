import axios from "axios";
import gestionErrorConnexion from "../gestionError/GestionErrorConnexion";

export default function onSubmitsSignIn (email,password,settoken,setpseudo,setSignInProps,signInProps,seterrorMsg,setemail,setpassword){

    const error = gestionErrorConnexion(password,email,seterrorMsg);
    if(error===false){
      const user = {email,password}
      axios.post("http://localhost:5000/user/login",user)
      .then((res)=>{
        localStorage.setItem("token",res.data.token);
        settoken(res.data.token);
        localStorage.setItem('pseudo',res.data.pseudonyme);
        setpseudo(res.data.pseudonyme);
        setSignInProps(!signInProps);
        setemail("");
        setpassword("");
      })
      .catch((err)=>{
        if(err.response.status===404){
          seterrorMsg(err.response.data);
        }
      })
    }
  }