export default function regexMajusculeMdp(mdp){
    const regexNom=/^(?=.*[A-Z]).+$/;
    const isRegex=regexNom.test(mdp);
    return isRegex;
}