export default function regexMail(mail){
    const regexNom=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isRegex=regexNom.test(mail);
    return isRegex;
}