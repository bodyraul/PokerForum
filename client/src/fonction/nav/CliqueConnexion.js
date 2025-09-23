export default function  clickConnexion (setSignUpProps,setSignInProps,signInProps,errMsgNav,seterrMsgNav) {
    setSignInProps(!signInProps);
    setSignUpProps(false);
    seterrMsgNav({
        ...errMsgNav,signIn:"",signUp:"",
     })
  }
