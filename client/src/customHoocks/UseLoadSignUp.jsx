import { useEffect } from "react"

export default function UseLoadSignUp(signUpProps,formSignUp){
    useEffect(() => {
        if(signUpProps===false){
        formSignUp.current.style.display="none";
        }
        if(signUpProps===true){
        formSignUp.current.style.display="flex";
        }
        
    }, [signUpProps,formSignUp])
}