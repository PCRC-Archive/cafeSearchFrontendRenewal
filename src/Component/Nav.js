import axios from "axios";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../Login/LoginModal";
import '../Style/Nav.scss';



const Nav = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const {Kakao} = window;
    const logoutClick = async () => {

        // 로그아웃 API 홏출
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
                        <button onClick={openModal}>로그인</button>
                        <LoginModal open={modalOpen} close={closeModal} header="Modal heading">
                        </LoginModal>
                    </Fragment>
                    <button onClick={logoutClick}>로그아웃</button>
                    <button>마이페이지</button>
                </div>
            </div>
        </div>
    );


}


export default Nav;