import React from 'react';
import './loginmodal.scss';


export default function Modal (props) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props;

    const outsideClick = (event) => {
        if(event.target.className !== 'openModal modal') {
            return close
        }
    }

    const {Kakao} = window;
    const kakaoClick = () => {
        Kakao.Auth.authorize({
            redirectUri: 'http://localhost:3000/kakao/auth/callback'
        });   
    }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'} onClick={outsideClick}>
        {open ? (
            <section>
                <header>
                    로그인
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </header>
                <main>
                    <div style={{fontSize: 48, fontWeight: 'bold'}}>Login</div>
                    <div style={{height: 40}}/>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <input type="text"  placeholder="아이디" style={{width: '80%', height: 50}}/>
                        <div style={{height: 10}}/>
                        <input type="password"  placeholder="비밀번호" style={{width: '80%', height: 50}}/>
                    </div>
                    <div className="signin-find-idpw" style={{display: 'flex', flexDirection: 'column'}}>
                        <button style={{marginLeft: '60%'}}>회원가입</button>
                        <button style={{marginLeft: '60%'}}>아이디/비밀번호 찾기</button>
                    </div>
                    <div style={{height: 40}}/>
                    <div className="login-button" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <button className="btn-login" style={{width: '60%', height: 60}}>로그인</button>
                        <div style={{height: 10}}/>
                        <div className="sns-login">
                            <img src="/kakao_login_medium_narrow.png" alt="카카오 로그인" className="kakao-login" onClick={kakaoClick}/>
                        </div>
                    </div>
                    <div style={{height: 20}}/>
                </main>
            </section>
        ) : null}
    </div>
  );
};