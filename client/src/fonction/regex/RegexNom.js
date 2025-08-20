
export default function regexNom(nom){
    const regexNom=/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    const isRegex=regexNom.test(nom);
    return isRegex;
}