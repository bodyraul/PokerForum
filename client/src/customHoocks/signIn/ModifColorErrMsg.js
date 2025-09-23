import React from 'react'
import { useEffect,useRef,useContext } from 'react'
import SigneUpInContext from '../../Context/SIgneUpInContext';

export default function ModifColorErrMsg() {
    const{errMsgNav, seterrMsgNav}=useContext(SigneUpInContext);
    const errRef=useRef();
    useEffect(() => {
        if(errMsgNav.signIn==="inscription validé, connectez-vous!"){
            errRef.current.style.color="#D6FBD5";
            }
        if(errMsgNav.signIn!=="inscription validé, connectez-vous!"){
            errRef.current.style.color="#FBD5D5";
            }
    }, )
    return {errRef,errMsgNav,seterrMsgNav};
}
