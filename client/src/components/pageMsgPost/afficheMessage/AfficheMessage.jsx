import React from 'react'
import UseNbPageMsg from '../../../customHoocks/message/UseNbPageMsg';
import ContentMsg from './ContentMsg';
import Paginate from '../../../componentsResutilisable/globale/Paginate'


export default function AfficheMessage({message}) {
  const {currentPosts,currentPage,setcurrentPage,nbPage}=UseNbPageMsg(message);
  
    return(
      <div className="sup480:w-[400px] sup480:mb-[50px] sup768:mb-[70px] sup768:w-[630px] sup1024:w-[750px] sup1024:mb-[90px] sup1600:mb-[110px] sup1600:w-[850px] mb-[30px] w-[80%] my-0  mx-auto max-w-[1800px]">
          <p className='sup480:pb-[60px] sup480:text-[25px] sup768:pb-[90px] sup768:text-[31px] sup1024:pb-[100px] sup1024:text-[42px] sup1600:pb-[120px] sup1600:text-[48px] pb-[45px] text-[20px] text-center  text-vertFoncer max-w-[1800px]"'>
            Tous les messages
          </p>
        {currentPosts.map((element) => {
          return (
            <div key={element._id}>
                <ContentMsg element={element}/>
            </div>
          );
        })}
        {nbPage<=0 ? "": <Paginate set={setcurrentPage} currentPage={currentPage} nbPage={nbPage}/> }
      </div>
    )

}