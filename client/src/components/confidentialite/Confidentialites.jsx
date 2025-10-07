import React from 'react'
import tabConfidentialite from '../../tools/tab/TabConfidentialite';
import PartContenuConfidentialite from './PartContenuConfidentialite';
import PartBtnConfidentialite from './PartBtnConfidentialite';

export default function Confidentialites() {

    return(
        <>
            <div className="fixed w-screen h-screen bg-vertFoncer z-[60] opacity-[0.2]"></div>
            <div className="sup480:w-[280px] sup768:w-[320px] sup768:h-[450px]  sup1024:w-[370px] sup1024:h-[500px] sup1600:w-[400px] sup1600:h-[570px] text-vertFoncer bg-blanc border border-vertFoncer w-[250px] h-[400px] fixed left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[60] " >
                <p className="sup480:text-[14px] sup768:h-[75px] sup1024:h-[84px] sup1600:h-[95px] sup768:text-[16px] sup1024:text-[17px] sup1600:text-[18px] h-[67px] flex items-center justify-center font-bold text-[13px]">Conditions générales d'utilisation</p>
                <div className="VisibleContenuDeux sup768:h-[375px] sup1024:h-[416px] sup1600:h-[475px] overflow-y-scroll h-[333px] border-t border-t-vertFoncer">
                    <p className="sup480:text-[14px] sup768:text-[16px] sup1024:text-[17px] sup1600:text-[18px] text-[13px] pl-[15px] pt-[30px] mb-[25px] font-bold ">L'inscription nécessite d'accepter toutes les conditions suivantes.</p>
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
