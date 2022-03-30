import { useState, Fragment } from "react";
import LoginModal from '../Login/LoginModal'


export default function MainPage() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const {Kakao} = window;
    const kakaoLogoutClick = () => {
        Kakao.Auth.authorize({
            redirectUri: 'http://localhost:3000/kakao/auth/logout'
        });
    }

    return (
        <div id="main-wrapper">
            <div id="nav-wrapper">
                <div id="logo-wrapper">
                    <button>logo</button>
                </div>
                <div id="user-wrapper">
                    <Fragment>
                        <button onClick={openModal}>로그인</button>
                        <LoginModal open={modalOpen} close={closeModal} header="Modal heading">
                        </LoginModal>
                    </Fragment>
                    <button onClick={kakaoLogoutClick}>로그아웃</button>
                    <button>마이페이지</button>
                </div>
            </div>
            <div id="title-wrapper">
                <h1>자기야 카페 어디갈래?</h1>
            </div>
            <div id="button-wrapper">
                <div className="button-container">
                    <button type="button" className="btn btn-secondary">지역 검색</button>
                </div>
                <div className="button-container">
                    <button type="button" className="btn btn-secondary">지하철 검색</button>
                </div>
                <div className="button-container">
                    <button type="button" className="btn btn-secondary">이름 검색</button>
                </div>
            </div>
        </div>
    );
}
