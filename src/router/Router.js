
import {Routes, Route} from 'react-router-dom';
import MainPage from '../Component/MainPage';
import SearchByName from '../Component/SearchByName';
import SearchByRegion from '../Component/SearchByRegion';
import SearchBySubway from '../Component/SearchBySubway';


const Router = () => {

    <Routes>
        <Route path='/' eleemnt={<MainPage/>}></Route>
        <Route path='/search/region' element={<SearchByRegion/>}></Route>
        <Route path='/search/subway' element={<SearchBySubway/>}></Route>
        <Route path='/search/name' element={<SearchByName/>}></Route>
        {/*카카오 로그인, 로그아웃, 탈퇴, 마이페이지 route 추가 추가*/}
    </Routes>

}