import React from 'react'
import InfoMessage from '../../../componentsResutilisable/message/InfoMessage'

export default function TopListMsg({element}) {
  return (
    <div className="sup480:pb-[25px] sup768:pb-[38px] sup1024:pb-[50px] pb-[20px] text-vertClair font-bold flex items-center justify-between bg-blanc">
        <div className=" flex items-center justify-between">
            <InfoMessage>
            {" " + element.pseudoCreateurMessage}
            </InfoMessage>
        </div>
        <InfoMessage>
            {element.dateCreation}
        </InfoMessage>
    </div>
  )
}
