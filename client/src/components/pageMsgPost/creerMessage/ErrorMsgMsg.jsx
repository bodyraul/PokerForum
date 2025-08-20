import React from 'react'

export default function ErrorMsgMsg({paraMessageErreur,messageErreur}) {
  return (
    <p className="text-error text-xl  h-[50px] " ref={paraMessageErreur}>
        {" "}
        {messageErreur}{" "}
    </p>
  )
}
