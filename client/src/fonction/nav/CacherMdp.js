export default function cacherMdp(mdpCacher,setmdpCacher){
    if(mdpCacher.mdp===true){
        setmdpCacher({...mdpCacher,mdp:false})
    }
    if(mdpCacher.mdp===false){
        setmdpCacher({...mdpCacher,mdp:true})
    }
}