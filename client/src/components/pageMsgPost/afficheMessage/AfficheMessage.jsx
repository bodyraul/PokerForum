import React from 'react'
import InfoMessage from '../../../componentsResutilisable/message/InfoMessage';

export default function AfficheMessage({message,titrecontenu}) {
  return (
    <div className="sup990:w-[990px] w-full mx-auto mt-12 mb-0">
        {message.map((element) => {
          return (
            <div
              key={element._id}
              className=" bg-blanc mb-7 p-9 border-solid border-[2px] border-gris"
            >
              <div className="pb-5 text-vertClair font-bold flex items-center justify-between">
                <div className=" flex items-center justify-between">
                  <InfoMessage>
                    {" " + element.pseudoCreateurMessage}
                  </InfoMessage>
                </div>
                <InfoMessage>
                    {element.dateCreation}
                </InfoMessage>
              </div>
              <p className="VisibleContenu block relative overflow-hidden overflow-y-scroll w-full mb-[40px] text-vertFoncer text-[18px] h-[55px] py-0 px-[10px] bg-grisFonce  " ref={titrecontenu}>
                {element.contenu}
              </p>
            </div>
          );
        })}
      </div>
  )
}
