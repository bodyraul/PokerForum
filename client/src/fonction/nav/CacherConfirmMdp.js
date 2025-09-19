export default function cacherConfirmMdp(mdpCacher,setmdpCacher){
    if(mdpCacher.confirmMdp===true){
        setmdpCacher({...mdpCacher,confirmMdp:false})
    }
    if(mdpCacher.confirmMdp===false){
        setmdpCacher({...mdpCacher,confirmMdp:true})
    }
}