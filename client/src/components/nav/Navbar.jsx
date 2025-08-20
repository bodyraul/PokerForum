import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import NavUserConnecter from './NavUserConnecter';
import NavUserDeconnecter from './NavUserDeconnecter';

export default function Navbar({signInProps,signUpProps,setSignInProps,setSignUpProps,pseudo}) {
  const {token,settoken}=useContext(AuthContext);

    if(token){
      return(
        <NavUserConnecter pseudo={pseudo} settoken={settoken}/>
      )
    }
    if(!token){
      return (
       <NavUserDeconnecter setSignInProps={setSignInProps} signInProps={signInProps} setSignUpProps={setSignUpProps} signUpProps={signUpProps}/>
  )

    }
}
