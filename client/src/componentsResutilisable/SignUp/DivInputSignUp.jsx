import React from 'react'
import tab from '../../tools/tab/taLabelInputSignUp'
import regexNom from '../../fonction/regex/RegexNom';

export default function DivInputSignUp({nbUn,nbDeux,setUn,setDeux,seterrorMsg,valueUn,valueDeux,seterrorNom,errorNom}) {



  return (
    <div className="w-full flex items-start justify-evenly">
        <input
          className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
          placeholder={tab.placeholder[nbUn]}
          type="text"
          onChange={(e)=>{
            setUn(e.target.value);
            if(regexNom(e.target.value)===true & errorNom===true){
              console.log("oui")
              seterrorNom(false);
            }
            if(regexNom(e.target.value)===false & errorNom === false){
              console.log("non")
              seterrorNom(true);
            }
          }}
          onClick={()=>seterrorMsg("")}
          id={tab.id[nbUn]}
          value={valueUn}
        />
        <input
          className="sup480:text-[12px] sup768:text-[14px] sup1024:text-[16px] sup1600:text-[18px] text-[10px] focus:outline-blanc focus:outline-double mb-[10px] p-[8px] w-[40%] rounded-lg border border-solid border-blanc text-xs bg-vertFoncer text-blanc placeholder:text-blanc "
          placeholder={tab.placeholder[nbDeux]}
          type="text"
          onChange={(e)=>setDeux(e.target.value)}
          onClick={()=>seterrorMsg("")}
          id={tab.id[nbDeux]}
          value={valueDeux}
        />
      </div>
  )
}
