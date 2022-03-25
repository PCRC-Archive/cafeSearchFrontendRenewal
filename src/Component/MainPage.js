export default function MainPage() {
    return (
        <div id="main-wrapper">
            <div id="nav-wrapper">
                <div id="logo-wrapper">
                    <button>logo</button>
                </div>
                <div id="user-wrapper">
                    <button>로그인</button>
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
