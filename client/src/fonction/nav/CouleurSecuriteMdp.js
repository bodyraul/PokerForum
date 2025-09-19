export default function couleurSecuriteMdp(errTypeSignUp){
    if(errTypeSignUp.mdp==="Sécurité faible"){
        return "bg-errorDeux"
      }
      if(errTypeSignUp.mdp==="Sécurité moyenne"){
        return "bg-errorTrois"
      }
      if(errTypeSignUp.mdp==="Sécurité forte"){
        return "bg-valide"
      }
}