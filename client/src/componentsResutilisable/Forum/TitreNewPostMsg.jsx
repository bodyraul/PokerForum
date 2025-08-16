import React from 'react'
import tabTitreNewPostMsg from '../../tools/tab/TabTitreNewPostMsg'

export default function TitreNewPostMsg({nb}) {

  return (
    <p className={`sup670:text-${tabTitreNewPostMsg.class.sizeTextResponsive[nb]} text-vertFoncer pb-6 text-${tabTitreNewPostMsg.class.sizeText[nb]}`}>
        {tabTitreNewPostMsg.text[nb]}
    </p>
  )
}
