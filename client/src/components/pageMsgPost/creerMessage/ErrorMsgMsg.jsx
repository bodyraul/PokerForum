import React from 'react'

export default function ErrorMsgMsg({paraMessageErreur,messageErreur}) {
  return (
    <p className="text-error text-xl pb-6" ref={paraMessageErreur}>
        {" "}
        {messageErreur}{" "}
    </p>
  )
}
