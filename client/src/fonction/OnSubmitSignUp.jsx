import axios from "axios";

export default function onSubmitsSignUp (nom,prenom,pseudonyme,email,password){
    const user = {nom, prenom, pseudonyme, email, password}
    axios.post("http://localhost:5000/user/register",user)
    .then((res)=>(console.log(res) ))
    .catch((err)=>(console.log(err)))
  }