import React from 'react'

export default function Pagination({postsPerPage,totalPosts,paginate,currentpage}) {

    const pageNumbers = [];

    for (let index = 1; index < Math.ceil(totalPosts/postsPerPage); index++) {
        pageNumbers.push(index);
    }

  return (
    <div className='sup480:w-full flex flex-wrap justify-center my-0 mx-auto w-[200px]'>
       {pageNumbers.map(number=>(
            <button onClick={()=> paginate(number)}
               key={number}  className={`${number===currentpage?`bg-vertFoncer text-blanc`:`bg-blanc text-vertFoncer`} sup480:text-[11px] sup480:h-[20px] sup480:w-[25px] sup480:mr-[7px] sup480:mb-[5px] sup768:w-[30px] sup768:h-[25px] sup768:text-[12px] sup768:mr-[13px] sup1024:w-[33px] sup768:mb-[10px] sup1024:h-[28px] sup1024:mr-[15px] sup1024:mb-[13px] sup1024:text-[14px] sup1600:text-[16px] sup1600:w-[35px] sup1600:h-[30px] sup1600:mb-[14px] text-[9px]  border border-vertFoncer w-[25px] h-[17px] mr-[20px] mb-[15px]`}>{number}</button>
       ))}
    </div>
  )
}
