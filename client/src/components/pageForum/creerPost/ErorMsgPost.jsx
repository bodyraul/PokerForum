import React from 'react'

export default function ErorMsgPost({errorMsgCreerPost,errorMsgPost}) {
  return (
    <p ref={errorMsgPost} className="sup670:text-base text-sm h-12 text-error ">
        {" "}
        {errorMsgCreerPost}{" "}
    </p>
  )
}
