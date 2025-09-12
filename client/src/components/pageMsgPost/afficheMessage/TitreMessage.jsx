import React from 'react'

export default function TitreMessage({message}) {
  return(
    <>
        {message.length<=0? 
        <p className=' sup480:text-[25px]  sup768:text-[31px]  sup1024:text-[42px] sup1600:text-[48px]  text-[20px] text-center  text-vertFoncer max-w-[1800px]"'>
            Aucun message
        </p> 
        : 
        <p className="sup480:pb-[60px] sup480:text-[25px] sup768:pb-[90px] sup768:text-[31px] sup1024:pb-[100px] sup1024:text-[42px] sup1600:pb-[120px] sup1600:text-[48px] pb-[45px] text-[20px] text-center  text-vertFoncer max-w-[1800px]" >
            {message.length=== 1 ? "1 message":`${message.length} messages`}
        </p>}
    </>
  )
    
}
