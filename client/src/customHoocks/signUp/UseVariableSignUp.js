import { useState } from "react"
import { useRef } from "react"
import { useContext } from "react"
import SigneUpInContext from "../../Context/SIgneUpInContext"

export default function UseVariableSignUp(){
    const {signIn,setSignIn,signUp,setSignUp} = useContext(SigneUpInContext);
    const [nom, setnom] = useState("")
    const [prenom, setprenom] = useState("")
    const [pseudonyme, setpseudonyme] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [confirmMdp, setconfirmMdp] = useState("")
    const [errorMsg, seterrorMsg] = useState("");
    const formSignUp = useRef();
    return {signIn,setSignIn,signUp,setSignUp,nom,setnom,prenom,setprenom,pseudonyme,setpseudonyme,
    email,setemail,password,setpassword,confirmMdp,setconfirmMdp,errorMsg,seterrorMsg,formSignUp};
}