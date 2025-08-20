import React from 'react'
import TopContenuPostMsg from './TopContenuPostMsg';
import BottomContenuPostMsg from './BottomContenuPostMsg';


export default function ContentPostMsg({listePost}) {

  return (
     <>
        {listePost.map((element) => {
        return (
            <div key={element._id} className=" sup480:p-[8px] sup768:p-[13px] sup1024:p-[20px] sup1600:p-[25px] p-[5px] flex-col border-solid border border-gris bg-blanc ">
                <TopContenuPostMsg element={element} />
                <BottomContenuPostMsg element={element} />
            </div>
        );
        })}
     </>
  )
}
