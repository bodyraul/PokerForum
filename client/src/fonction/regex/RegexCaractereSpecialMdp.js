export default function regexCaractereSpecialMdp(mdp){
    const regexNom=/^(?=.*[#?!@$%^&*-+.:;,µ¤£]).+$/;
    const isRegex=regexNom.test(mdp);
    return isRegex;
}