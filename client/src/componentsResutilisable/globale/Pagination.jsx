import React from 'react'

export default function Pagination({postsPerPage,totalPosts,paginate,currentpage}) {

    const pageNumbers = [];

    for (let index = 1; index < Math.ceil(totalPosts/postsPerPage); index++) {
        pageNumbers.push(index);
    }

  return (
    <div className='sup480:h-[35px] sup480:pt-[2px] sup768:h-[45px] sup768:pt-[8px] sup1024:h-[50px] sup1024:pt-[8px] sup1600:h-[53px] sup1600:pt-[9px] px-[2px] VisibleContenu sup480:w-full justify-center my-0 mx-auto   border-[2px] border-grisFonce overflow-hidden overflow-y-scroll rounded-lg  h-[33px] w-[200px] '>
       {pageNumbers.map(number=>(
            <button onClick={()=> paginate(number)}
               key={number}  className={`${number===currentpage?`bg-vertFoncer text-blanc`:`bg-blanc text-vertFoncer`} sup480:text-[11px] sup480:h-[20px] sup480:w-[25px] sup480:mr-[15px] sup480:mb-[5px] sup768:w-[30px] sup768:h-[25px] sup768:text-[12px] sup768:mr-[20px] sup1024:w-[33px] sup768:mb-[10px] sup1024:h-[28px] sup1024:mr-[25px] sup1024:mb-[13px] sup1024:text-[14px] sup1600:text-[16px] sup1600:w-[35px] sup1600:h-[30px] sup1600:mb-[14px] sup1600:mr-[30px] text-[9px]  border border-vertFoncer w-[25px] h-[17px] mr-[20px] mb-[15px]`}>{number}</button>
       ))}
    </div>
  )
}
