import React from 'react'
import { Link } from 'react-router-dom'
import clickInscription from '../../fonction/CliqueInscription';
import clickConnexion from '../../fonction/CliqueConnexion';

export default function Navbar({signInProps,signUpProps,setSignInProps,setSignUpProps}) {

  return (
    <div className="fixed top-0 z-50 h-24 w-screen  flex items-center justify-center ">
        <nav className=" h-20  w-[88%] bg-gradient-to-r from-vertFoncer from-0%  to-vertClair to-100%  flex items-center justify-evenly rounded-bl-3xl rounded-tr-3xl max-w-[1800px]">
          <Link
            className="sup1600:text-3xl text-blanc text-xl outline-none  no-underline transition-transform ease-in-out duration-300 hover:scale-90 hover:opacity-60 hover:cursor-pointer"
            to={"/"}
          >
            Accueil
          </Link>
          <Link
            className="sup1600:text-3xl text-blanc text-xl outline-none no-underline transition-transform ease-in-out duration-300 hover:scale-90 hover:opacity-60 hover:cursor-pointer"
            to={"/forum"}
          >
            Forum{" "}
          </Link>
          <Link
            className="sup1600:text-3xl text-blanc text-xl outline-none  no-underline transition-transform ease-in-out duration-300 hover:scale-90 hover:opacity-60 hover:cursor-pointer"
            onClick={()=>clickInscription(setSignUpProps,setSignInProps,signUpProps)}
          >
            Inscription{" "}
          </Link>
           <Link
            className="sup1600:text-3xl text-blanc text-xl outline-none  no-underline transition-transform ease-in-out duration-300 hover:scale-90 hover:opacity-60 hover:cursor-pointer"
            onClick={()=>clickConnexion(setSignUpProps,setSignInProps,signInProps)}
          >
            Connexion{" "}
          </Link>

        </nav>
      </div>
  )
}
