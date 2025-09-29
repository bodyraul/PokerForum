import { useState } from "react";

export default function UseTokenConfig(){
    const initToken = localStorage.getItem("token")? localStorage.getItem("token") : "";
    const [pseudo, setpseudo] = useState(localStorage.getItem('pseudo')?localStorage.getItem('pseudo'):"" );
    const [token, settoken] = useState(initToken);
    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [spin, setSpin] = useState(true);
    const config = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    };
    const [errMsgNav, seterrMsgNav] = useState({
        signUp:"",
        signIn:""
      })
    return {token,settoken,config,pseudo,setpseudo,signIn,setSignIn,signUp,setSignUp,spin,setSpin,errMsgNav, seterrMsgNav}
}