import React from 'react'

export default function ThemePost({children}) {
  return (
      <p className="sup480:text-[14px] sup768:text-[16px] sup1024:text-[18px] sup1600:text-[20px] w-1/4 text-center text-[11px]">{children}</p>
  )
}
