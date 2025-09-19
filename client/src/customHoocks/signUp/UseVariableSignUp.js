import { useState } from "react"
import { useRef } from "react"
import { useContext } from "react"
import SigneUpInContext from "../../Context/SIgneUpInContext"

export default function UseVariableSignUp(){
    const {signIn,setSignIn,signUp,setSignUp} = useContext(SigneUpInContext);
    const [valueInputSignUp, setvalueInputSignUp] = useState({
        nom:"",
        prenom:"",
        pseudonyme:"",
        email:"",
        password:"",
        confirmMdp:"",
    })
    const  [errTypeSignUp, seterrTypeSignUp] = useState({
          nom:true,
          prenom:true,
          mail:true,
          mdp:"Sécurité faible",
          confirmMdp:true,
        })
        const [errNbSignUp, seterrNbSignUp] = useState({
          nom:true,
          prenom:true,
          pseudo:true,
          mail:true,
          mdp:true
        })
    
        const [mdpCacher, setmdpCacher] = useState({
          mdp:true,
          confirmMdp:true
        })
    const [errorMsg, seterrorMsg] = useState("");
    const formSignUp = useRef();
    return {signIn,setSignIn,signUp,setSignUp,valueInputSignUp,setvalueInputSignUp,errorMsg,seterrorMsg,formSignUp,errTypeSignUp,seterrTypeSignUp,
        errNbSignUp,seterrNbSignUp,mdpCacher,setmdpCacher};
}