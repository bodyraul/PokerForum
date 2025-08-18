import React from 'react'
import tabTitreNewPost from '../../tools/tab/TabTitreNewPost'
import tabTitreNewMsg from '../../tools/tab/TabTitreNexMsg'

export default function TitreNewPostMsg({nb,sujet}) {

  const tab = sujet ==="post"? tabTitreNewPost:tabTitreNewMsg;

  return (
    <p className={`${tab.css[nb]} sup480:pb-[13px] sup768:pb-[16px] sup1024:pb-[17px] sup1600:pb-[19px] text-vertFoncer pb-[10px] `}>
        {tab.text[nb]}
    </p>
  )
}
