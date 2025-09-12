import React from 'react'
import spinner from "../../assets/img/spinner.svg"

export default function Spinner() {
  return (
   <div className='sup480:pt-[120px] sup768:pt-[140px] sup1024:pt-[160px] sup1600:pt-[200px] flex justify-center w-full pt-[100px]' >
      <img className='sup480:w-[130px] sup768:w-[160px] sup1024:w-[190px] sup1600:w-[230px] w-[100px]' src={spinner} alt="spinner pour les chargements" />
    </div>
  )
}
