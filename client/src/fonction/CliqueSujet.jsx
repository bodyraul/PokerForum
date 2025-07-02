
export default function  cliqueSujet (valueAuteurSujet,inputAuteur,inputSujet,inputsearchSujetAuteur,setvalueAuteurSujet)  {
    if (valueAuteurSujet === "sujet") {
      return;
    }
    inputAuteur.current.style.color = "#547981";
    inputAuteur.current.style.backgroundColor = "white";
    inputSujet.current.style.color = "white";
    inputSujet.current.style.backgroundColor = "#547981";
    inputsearchSujetAuteur.current.placeholder = "rechercher sujet";
    setvalueAuteurSujet("sujet");
  };