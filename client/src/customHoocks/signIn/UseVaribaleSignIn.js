import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import SigneUpInContext from "../../Context/SIgneUpInContext";

export default function UseVariableSignIn(){
     const formSignIn = useRef();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const{settoken,setpseudo} = useContext(AuthContext);
    const [errorMsg, seterrorMsg] = useState("");
    const {signIn,setSignIn}=useContext(SigneUpInContext);

    return {formSignIn,email,setemail,password,setpassword,settoken,setpseudo,errorMsg,seterrorMsg,signIn,setSignIn}
}