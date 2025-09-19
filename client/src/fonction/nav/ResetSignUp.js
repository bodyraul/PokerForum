export default function resetSignUp(text){
    const resetValueInput={
                pseudonyme:"",
                nom:"",
                prenom:"",
                email:"",
                password:"",
                confirmMdp:"",
            }
            const resetErrTypeSignUp={
              nom:true,
              prenom:true,
              mail:true,
              mdp:"Sécurité faible",
              confirmMdp:true
            }
             const resetErrNbSignUp={
              nom:true,
              prenom:true,
              pseudo:true,
              mail:true,
              mdp:true
            }
            const resetCacherMdp={
              mdp:true,
              confirmMdp:true
            }
    if(text==="resetValueInput"){
        return resetValueInput
    }
    if(text==="resetErrTypeSignUp"){
        return resetErrTypeSignUp
    }
    if(text==="resetErrNbSignUp"){
        return resetErrNbSignUp
    }
    if(text==="resetCacherMdp"){
        return resetCacherMdp
    }
}