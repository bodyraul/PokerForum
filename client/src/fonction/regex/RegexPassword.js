export default function regexPassword(mdp){
    const regexNom=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isRegex=regexNom.test(mdp);
    return isRegex;
}