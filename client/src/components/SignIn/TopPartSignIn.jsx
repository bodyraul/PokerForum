import React from 'react'
import croix from '../../assets/img/croix.png'
import { useContext } from 'react';
import SigneInContext from '../../Context/SignInContext';
import SigneUpInContext from '../../Context/SIgneUpInContext';

export default function TopPartSignIn() {
  const {setSignIn,signIn,setemail,setpassword}=useContext(SigneInContext);
  const{errMsgNav, seterrMsgNav}=useContext(SigneUpInContext);
  return (
     <div className=" flex items-center justify-between w-full text-blanc ">
        <h2 className="sup480:text-[18px] sup480:pb-[18px] sup768:text-[21px] sup768:pb-[21px] sup1024:text-[24px] sup1024:pb-[24px] sup1600:text-[30px] sup1600:pb-[27px] pb-[15px] text-[15px] ">Se connecter</h2>
        <button onClick={()=> {
            setSignIn(!signIn);
            setemail("");
            setpassword("");
            seterrMsgNav({
              ...errMsgNav,signIn:""
            })
        }} className="sup480:size-[19px] sup480:top-[34.3px] sup768:size-[21px] sup768:top-[36px] sup1024:size-[24px] sup1024:top-[40px] sup1300:size-[27px]  size-[17px] absolute right-[20px] top-[32px] rounded-s-full border-none bg-noir">
            <img className="transition-all hover:scale-[1.2] hover:cursor-pointer" src={croix} alt=""/>
        </button>
    </div>
  )
}
