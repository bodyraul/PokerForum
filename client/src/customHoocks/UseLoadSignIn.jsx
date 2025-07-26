import { useEffect } from "react"

export default function UseLoadSignIn(signInProps,formSignIn){
    useEffect(() => {
        if(signInProps===false){
            formSignIn.current.style.display="none";
        }
        if(signInProps===true){
            formSignIn.current.style.display="flex";
        }
    }, [signInProps,formSignIn]) 
}