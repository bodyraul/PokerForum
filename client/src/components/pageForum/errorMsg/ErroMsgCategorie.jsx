import React from 'react'
import { useContext } from 'react'
import CategorieContext from '../../../Context/CategorieContext'

export default function ErroMsgCategorie() {
    const {errorMsgCategorie}=useContext(CategorieContext);
    return (
      <p className="sup480:text-[12px] sup480:h-[40px] sup768:text-[14px] sup768:h-[50px] sup1024:text-[16px] sup1024:h-[60px] sup1600:text-[18px] sup1600:h-[70px] text-[10px] h-[30px] flex items-center justify-center w-full my-0 mx-auto text-error">
          {errorMsgCategorie}
      </p>
  )
}
