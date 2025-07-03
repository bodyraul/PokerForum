import resetAllRadio from "./ResetAllRadio";

export default async function gestionRadio(e,setradioValue) {
        resetAllRadio();
        setradioValue(e.target.value);
        e.target.checked = true;
    }