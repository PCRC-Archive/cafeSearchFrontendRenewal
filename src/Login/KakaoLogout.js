import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const KakaoLogout = () => {
    
    useEffect(()=> {
        axios.post('http://localhost:8080/user/logout');
    })
    return(
        <div></div>
    );
}


export default KakaoLogout;
