import React from 'react'
import DivLabelSignUp from '../../componentsResutilisable/SignUp/DivLabelSignUp'
import InputNomPrenom from './InputNomPrenom'
import InputPseudoMail from './InputPseudoMail'
import InputMdp from './InputMdp'

export default function PartLabelInputSignUp() {
   
  return (
    <>
        <DivLabelSignUp nbUn={0} nbDeux={1}/>
        <InputNomPrenom />
        <DivLabelSignUp nbUn={2} nbDeux={3}/>
        <InputPseudoMail  />
        <DivLabelSignUp nbUn={4} nbDeux={5}/>
        <InputMdp/>
    </>
  )
}
