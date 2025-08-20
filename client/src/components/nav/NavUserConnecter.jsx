import React from 'react'
import { Link } from 'react-router-dom';

export default function NavUserConnecter({pseudo,settoken}) {
  return (
     <div className=" sup480:h-[70px]  sup768:h-[80px] sup1024:h-[95px] sup1600:h-[105px] h-[50px] fixed top-0 z-50 w-screen  flex items-center justify-center ">
        <nav className="sup480:h-[55px] sup768:h-[65px] sup1024:h-[75px] sup1600:h-[85px] h-[40px]  w-[85%] bg-gradient-to-r from-vertFoncer from-0%  to-vertClair to-100%  flex items-center justify-evenly rounded-bl-3xl rounded-tr-3xl max-w-[1800px]">
            <Link   to={"/"} className="sup480:text-[14px] sup768:text-[17px] sup1024:text-[23px] sup1600:text-[30px] text-[10px] text-blanc outline-none no-underline transition-transform ease-in-out duration-300 hover:scale-90 hover:opacity-60 hover:cursor-pointer">
                Forum{" "}
            </Link>
            <Link className="sup480:text-[14px] sup768:text-[17px] sup1024:text-[23px] sup1600:text-[30px] text-[10px] text-blanc outline-none  no-underline transition-transform ease-in-out duration-300 hover:scale-90 hover:opacity-60 hover:cursor-pointer"
            onClick={()=>{
                localStorage.removeItem('token');
                localStorage.removeItem('pseudo');
                settoken("");
            }}
            >
            Deconnexion{" "}
            </Link>
            <p className="sup480:text-[14px] sup768:text-[17px] sup1024:text-[23px] sup1600:text-[30px] text-[10px] text-blanc  outline-none  no-underline hover: ">
                {pseudo}
            </p>

        </nav>
    </div>
  )
}
