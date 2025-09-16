export default function regexChiffreMdp(mdp){
    const regexNom=/^(?=.*[0-9]).+$/;
    const isRegex=regexNom.test(mdp);
    return isRegex;
}