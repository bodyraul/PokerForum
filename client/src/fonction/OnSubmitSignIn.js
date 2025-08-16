import axios from "axios";

export default function onSubmitsSignIn (email,password,settoken){
    const user = {email,password}
    axios.post("http://localhost:5000/user/login",user)
    .then((res)=>{
      localStorage.setItem("token",res.data);
      settoken(res.data);
    })
    .catch((err)=>console.log(err))
  }