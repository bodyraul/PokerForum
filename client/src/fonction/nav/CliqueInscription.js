export default function  clickInscription (setSignUpProps,setSignInProps,signUpProps,errMsgNav,seterrMsgNav) {
    setSignUpProps(!signUpProps);
    setSignInProps(false);
    seterrMsgNav({
        ...errMsgNav,signIn:"",signUp:"",
     })
  }