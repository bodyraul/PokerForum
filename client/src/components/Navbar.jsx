import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({signInProps,signUpProps,setSignInProps,setSignUpProps}) {

  const clickInscription = ()=>{
    setSignUpProps(!signUpProps);
    setSignInProps(false);
  }

  const clickConnexion = ()=>{
    setSignInProps(!signInProps);
     setSignUpProps(false);
  }


  return (
    <div className="fixed top-0 z-50 h-24 w-screen  flex items-center justify-center ">
        <nav className="sup1600:w-1200 h-20  w-3/4 bg-gradient-to-r from-vertFoncer from-0%  to-vertClair to-100%  flex items-center justify-evenly rounded-bl-3xl rounded-tr-3xl ">
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
            onClick={clickInscription}
          >
            Inscription{" "}
          </Link>
           <Link
            className="sup1600:text-3xl text-blanc text-xl outline-none  no-underline transition-transform ease-in-out duration-300 hover:scale-90 hover:opacity-60 hover:cursor-pointer"
            onClick={clickConnexion}
          >
            Connexion{" "}
          </Link>

        </nav>
      </div>
  )
}
