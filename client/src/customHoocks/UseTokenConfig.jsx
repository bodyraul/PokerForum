import { useState } from "react";

export default function UseTokenConfig(){
    const initToken = localStorage.getItem("token")? localStorage.getItem("token") : "";
    const [token, settoken] = useState(initToken);
    const config = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    };
    return {token,settoken,config}
}