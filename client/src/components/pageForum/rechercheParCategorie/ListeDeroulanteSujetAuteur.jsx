import React from 'react'
import cliqueAuteur from '../../../fonction/forum/CliqueAuteur';
import cliqueSujet from '../../../fonction/forum/CliqueSujet';
import arrow from "../../../assets/img/arrow.png"

export default function ListeDeroulanteSujetAuteur({btnSujetAuteur,setbtnSujetAuteur,refBtnSujetAuteur,valueAuteurSujet,inputsearchSujetAuteur,setvalueAuteurSujet}) {
  return (
    <div className='sup480:w-[25%] sup1024:w-[20%] sup1600:w-[20%] w-[30%] relative text-blanc  flex justify-center'>
        <img onClick={()=>{
            if(btnSujetAuteur===false){
                setbtnSujetAuteur(true);
            }
            if(btnSujetAuteur===true){
                setbtnSujetAuteur(false);
            }
            }} 
            className='hover:cursor-pointer ' src={arrow} alt="flêche vers le bas" 
        />
        <div ref={refBtnSujetAuteur} className='sup480:text-[13px] sup480:h-[47px] sup480:top-[27px] sup768:top-[28px] sup768:text-[14px] sup768:h-[50px] sup1024:top-[30px] sup1024:text-[15px] sup1024:h-[60px] sup1600:top-[35px] sup1600:h-[70px] sup1600:text-[16px] text-[12px] h-[40px] top-[27px] absolute w-full  bg-vertFoncer border border-vertFoncer '>
            <p onClick={()=>cliqueSujet(valueAuteurSujet,inputsearchSujetAuteur,setvalueAuteurSujet,setbtnSujetAuteur)} className='h-1/2 flex items-center justify-center border-b-[1px] border-b-blanc hover:border-b-vertFoncer hover:text-vertFoncer hover:bg-blanc hover:cursor-pointer'>
                Sujet
            </p>
            <p onClick={()=>cliqueAuteur(valueAuteurSujet,inputsearchSujetAuteur,setvalueAuteurSujet,setbtnSujetAuteur)} className='h-1/2 flex items-center justify-center hover:text-vertFoncer hover:bg-blanc hover:cursor-pointer'>
                Auteur
            </p>
        </div>
    </div>
  )
}
