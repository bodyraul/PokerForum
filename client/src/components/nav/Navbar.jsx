import React from 'react'
import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import NavUserConnecter from './NavUserConnecter';
import NavUserDeconnecter from './NavUserDeconnecter';

export default function Navbar() {
  const {token}=useContext(AuthContext);

    if(token){
      return(
        <NavUserConnecter />
      )
    }
    if(!token){
      return (
       <NavUserDeconnecter/>
  )

    }
}
