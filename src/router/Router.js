
import {Routes, Route} from 'react-router-dom';
import MainPage from '../Component/MainPage';
import SearchByName from '../Component/SearchByName';
import SearchByRegion from '../Component/SearchByRegion';
import SearchBySubway from '../Component/SearchBySubway';
import KakaoAuth from '../Login/KakaoAuth';
//import KakaoLogout from '../Login/KakaoLogout';



const Router = () => {

    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/search/region" element={<SearchByRegion/>}/>
            <Route path="/search/subway" element={<SearchBySubway/>}/>
            <Route path="/search/name" element={<SearchByName/>}/>
            <Route path="/kakao/auth/callback" element={<KakaoAuth/>}/>    
            {/*카카오 로그인, 로그아웃, 탈퇴, 마이페이지 route 추가 추가*/}
        </Routes>

    );

}

export default Router;