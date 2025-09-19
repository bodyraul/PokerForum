export default function valideConfirmMdp(e,valueInputSignUp,seterrTypeSignUp,errTypeSignUp){
    if(valueInputSignUp.password === e.target.value && e.target.value.length>1 ){
        seterrTypeSignUp({...errTypeSignUp,confirmMdp:false})
    }
    if(valueInputSignUp.password !== e.target.value){
        seterrTypeSignUp({...errTypeSignUp,confirmMdp:true})
    }
}