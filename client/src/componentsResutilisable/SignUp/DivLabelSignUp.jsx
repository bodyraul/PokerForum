import React from 'react'

export default function DivLabelSignUp({labelUn,LabelDeux}) {
  return (
    <div className="w-full flex items-start justify-evenly">
        <div className="w-2/5 flex items-center justify-center">
          <label className="sup990:text-2xl mb-2 text-blanc text-lg" htmlFor="">
            {labelUn}
          </label>
        </div>
        <div className="w-2/5 flex items-center justify-center">
          <label className="sup990:text-2xl mb-2 text-blanc text-lg" htmlFor="">
            {LabelDeux}
          </label>
        </div>
      </div>
  )
}
