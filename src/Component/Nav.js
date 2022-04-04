import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../Login/LoginModal";
import '../Style/Nav.scss';
import { useSelector } from "react-redux";


const Nav = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const {user} = useSelector(state => ({
        user: state.toggleReducer.user,
    }));
    
    const link = "mypage/:" + user.user_id;
    const {Kakao} = window;
    const logoutClick = async () => {

        // 로그아웃 API 호출
        const requestLogout = await axios.post('http://localhost:8080/user/logout')
        .then(()=>{
            //store.dispatch({type: 'logout'});
            alert('로그아웃');
        })
        .catch(()=>{
            alert('로그아웃 실패');
        });
        
    }

    return(
        <div>
            <div id="nav-wrapper">
                <div id="logo-wrapper">
                    <Link to='/' style={{textDecoration: 'none', color: 'white'}}>logo</Link>
                </div>
                <div id="user-wrapper">
                    <Fragment>
                        {user.login ? 
                            <img src={user.profile_image_url} height={50} width={50} style={{borderRadius: 50}}/> : 
                            <button onClick={openModal}>로그인</button> }
                        <LoginModal open={modalOpen} close={closeModal} header="Modal heading">
                        </LoginModal>
                    </Fragment>
                    <button onClick={logoutClick}>
                        Logout
                    </button>
                        <Link to={link}>
                            <button>마이페이지</button>
                        </Link>
                </div>
            </div>
        </div>
    );


}


export default Nav;