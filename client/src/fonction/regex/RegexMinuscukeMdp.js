export default function regexMinusculeMdp(mdp){
    const regexNom=/^(?=.*[a-z]).+$/;
    const isRegex=regexNom.test(mdp);
    return isRegex;
}