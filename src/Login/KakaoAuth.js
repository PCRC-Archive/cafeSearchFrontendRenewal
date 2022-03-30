import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function KakaoAuth() {
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();
    // http://localhost:3000/auth/callback?code={인가 코드}
    // const [userInfo, setUserInfo] = useState({});
    const sendAuthCode = async () =>  {
            const response = await axios.post('http://localhost:8080/user/login',{
                code: code
            }) // code가 채린이네 서버로 이동
            .then((userData) => {
                // data ok
                let data = userData.data
                console.log(data);
                // test ok
                //store.dispatch({type : 'login'});
                //store.dispatch({type: 'setUserData', data});
                //console.log(userData);
            })
            .catch((err)=>{
                console.log('post err');
            })
        console.log("post auth code to server");
    }
    useEffect(()=>{
        // push auth code to server
        sendAuthCode();
        navigate('/');    
    },[code]);
    return(
        <div>
        </div>
    )
}
