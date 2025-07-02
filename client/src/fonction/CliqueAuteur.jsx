export default function  cliqueAuteur  (valueAuteurSujet,inputAuteur,inputSujet,inputsearchSujetAuteur,setvalueAuteurSujet)  {
    if (valueAuteurSujet === "auteur") {
      return;
    }
    inputAuteur.current.style.color = "white";
    inputAuteur.current.style.backgroundColor = "#547981";
    inputSujet.current.style.color = "#547981";
    inputSujet.current.style.backgroundColor = "white";
    inputsearchSujetAuteur.current.placeholder = "rechercher auteur";
    setvalueAuteurSujet("auteur");
  };