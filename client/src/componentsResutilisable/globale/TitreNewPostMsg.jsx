import React from 'react'
import tabTitreNewPost from '../../tools/tab/TabTitreNewPost'
import tabTitreNewMsg from '../../tools/tab/TabTitreNexMsg'

export default function TitreNewPostMsg({nb,sujet}) {

  const tab = sujet ==="post"? tabTitreNewPost:tabTitreNewMsg;

  return (
    <p className={`${tab.css[nb]} text-vertFoncer pb-6 `}>
        {tab.text[nb]}
    </p>
  )
}
