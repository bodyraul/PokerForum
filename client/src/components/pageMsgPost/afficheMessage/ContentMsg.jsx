import React from 'react'
import TopContentMsg from './TopContentMsg'
import BottomContentMsg from './BottomContentMsg'

export default function ContentMsg({element}) {
  return (
     <div className="sup480:h-[120px] sup480:mb-[50px] sup768:h-[140px] sup768:mb-[70px] sup1024:h-[160px] sup1024:mb-[90px] sup1600:h-[180px] sup1600:mb-[110px]  h-[110px] flex-col border-solid border  border-gris bg-blanc text-xl hover:cursor-pointer mb-[30px] w-[full] ">
        <TopContentMsg element={element}/>
        <BottomContentMsg element={element} />
    </div>
  )
}
