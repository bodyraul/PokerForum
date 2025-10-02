import React from 'react'
import tabConfidentialite from '../../tools/tab/TabConfidentialite';
import PartContenuConfidentialite from './PartContenuConfidentialite';
import PartBtnConfidentialite from './PartBtnConfidentialite';

export default function Confidentialites() {

    return(
        <>
            <div className="fixed w-screen h-screen bg-vertFoncer z-[60] opacity-[0.2]"></div>
            <div className="text-vertFoncer bg-blanc border border-vertFoncer w-[400px] h-[600px] fixed left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[60] " >
                <p className="h-[100px] flex items-center justify-center font-bold">Conditions générales d'utilisation</p>
                <div className="VisibleContenuDeux overflow-y-scroll h-[500px] border-t border-t-vertFoncer">
                    <p className="pl-[15px] pt-[30px] mb-[25px] font-bold">L'inscription nécessite d'accepter toutes les conditions suivantes.</p>
                    <PartContenuConfidentialite tab={tabConfidentialite.inscription}/>
                    <PartContenuConfidentialite tab={tabConfidentialite.respect} />
                    <PartContenuConfidentialite tab={tabConfidentialite.ContenuInterdit} />
                    <PartContenuConfidentialite tab={tabConfidentialite.proprieteIntellectuelle} />
                    <PartContenuConfidentialite tab={tabConfidentialite.moderation} />
                    <PartContenuConfidentialite tab={tabConfidentialite.supressionCompte} />
                    <PartContenuConfidentialite tab={tabConfidentialite.responsabilite} />
                    <PartContenuConfidentialite tab={tabConfidentialite.protectionDonnees} />
                    <PartContenuConfidentialite tab={tabConfidentialite.cgu} />
                    <PartContenuConfidentialite tab={tabConfidentialite.loiApplicable} />
                    <PartBtnConfidentialite />
                </div>
            </div>
        </>
    )
   
}
