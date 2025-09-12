import UseVariableSearchSujetAuteur from '../../../customHoocks/forum/UseVariableSearchSujetAuteur';
import InputSujetAuteur from './InputSujetAuteur';
import ListeDeroulanteSujetAuteur from './ListeDeroulanteSujetAuteur';
import ValideSearchSujetAuteur from './ValideSearchSujetAuteur';

export default function RechercheSujetAuteur() {
  
  const {seterrorMsgCategorie,setcurrentPage,setlistePost,recherchePost,setrecherchePost,valueAuteurSujet,setvalueAuteurSujet
    ,inputsearchSujetAuteur,setSpin,btnSujetAuteur,setbtnSujetAuteur,refBtnSujetAuteur} = UseVariableSearchSujetAuteur();
  
  return (
    <div className="sup480:w-[350px] sup480:py-[3px] sup768:py-[4px] sup1024:w-[450px] sup1024:py-[5px] sup1600:w-[650px] sup1600:py-[7px] w-[90%] py-[3px] flex  border-[1px] border-vertFoncer ">
        <InputSujetAuteur inputsearchSujetAuteur={inputsearchSujetAuteur} recherchePost={recherchePost} seterrorMsgCategorie={seterrorMsgCategorie} setrecherchePost={setrecherchePost} />
        <ListeDeroulanteSujetAuteur btnSujetAuteur={btnSujetAuteur} inputsearchSujetAuteur={inputsearchSujetAuteur} refBtnSujetAuteur={refBtnSujetAuteur} setbtnSujetAuteur={setbtnSujetAuteur} setvalueAuteurSujet={setvalueAuteurSujet} valueAuteurSujet={valueAuteurSujet}/>
        <ValideSearchSujetAuteur recherchePost={recherchePost} setSpin={setSpin} setcurrentPage={setcurrentPage} seterrorMsgCategorie={seterrorMsgCategorie} setlistePost={setlistePost} setrecherchePost={setrecherchePost} valueAuteurSujet={valueAuteurSujet} />
    </div>
  )
}
