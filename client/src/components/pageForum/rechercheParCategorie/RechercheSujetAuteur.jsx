import BtnSujetAuteur from '../../../componentsResutilisable/Forum/BtnSujetAuteur';
import valideRecherche from '../../../fonction/forum/ValideRecherche';
import UseVariableSearchSujetAuteur from '../../../customHoocks/forum/UseVariableSearchSujetAuteur';

export default function RechercheSujetAuteur() {
  
  const {seterrorMsgCategorie,setcurrentPage,setlistePost,recherchePost,setrecherchePost,valueAuteurSujet,
        setvalueAuteurSujet,inputSujet,inputAuteur,inputsearchSujetAuteur} = UseVariableSearchSujetAuteur();
  
  return (
    <div className="sup1024:w-[650px]  flex flex-wrap items-center justify-evenly w-full ">
        <input className="sup480:mb-0 sup480:placeholder:text-[12px] sup480:text-[13px] sup480:w-[105px] sup768:placeholder:text-[13px] sup768:w-[120px] sup768:text-[14px] sup1024:placeholder:text-[14px] sup1024:w-[115px] sup1024:text-[15px] sup1600:placeholder:text-[17px] sup1600:w-[140px] sup1600:text-[18px] w-[80px] text-[10px] text-vertFoncer border-solid border border-vertFoncer py-[4px] pl-[4px] outline-vertFoncer placeholder:text-vertFoncer placeholder:text-[9px] "
        ref={inputsearchSujetAuteur} value={recherchePost} type="text" placeholder="Rechercher Sujet"
        onChange={(e) => {setrecherchePost(e.target.value);}}
        onClick={()=>seterrorMsgCategorie("")}
        />
        <BtnSujetAuteur nb={0} valueAuteurSujet={valueAuteurSujet} inputAuteur={inputAuteur} inputSujet={inputSujet} inputsearchSujetAuteur={inputsearchSujetAuteur} setvalueAuteurSujet={setvalueAuteurSujet} />
        <BtnSujetAuteur nb={1} valueAuteurSujet={valueAuteurSujet} inputAuteur={inputAuteur} inputSujet={inputSujet} inputsearchSujetAuteur={inputsearchSujetAuteur} setvalueAuteurSujet={setvalueAuteurSujet} />
        <button className="sup480:mb-0 sup480:text-[13px] sup768:text-[14px] sup1024:text-[15px] sup1600:text-[19px] text-[10px] bg-blanc text-vertFoncer border-solid border border-vertFoncer ml-0 p-[4px]  hover:cursor-pointer "
        onClick={()=>{
          valideRecherche(setlistePost,valueAuteurSujet,recherchePost,setrecherchePost,setcurrentPage,seterrorMsgCategorie);
        }}>
        Rechercher
        </button>
    </div>
  )
}
