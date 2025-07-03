import React from 'react'

export default function ParaNewPost({children,textresponsive,texte}) {

    const classPara = `sup670:text-${textresponsive} text-vertFoncer pb-6 text-${texte}`

  return (
    <p className={classPara}>
        {children}
    </p>
  )
}
