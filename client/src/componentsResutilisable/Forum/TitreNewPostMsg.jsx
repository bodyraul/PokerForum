import React from 'react'

export default function TitreNewPostMsg({children,textresponsive,texte}) {

  return (
    <p className={`sup670:text-${textresponsive} text-vertFoncer pb-6 text-${texte}`}>
        {children}
    </p>
  )
}
