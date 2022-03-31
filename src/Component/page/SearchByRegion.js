import { useSelector } from "react-redux";
import SearchChooseButton from "../button/SearchChooseButton";
import Map from "../Map";
import SearchPageTitle from "../search/SearchPageTitle";


const SearchByRegion = () => {

    const {regionButton, categoryButton, subwayButton} = useSelector(state => ({
        regionButton: state.toggleReducer.regionButton,
        categoryButton: state.toggleReducer.categoryButton,
        subwayButton: state.toggleReducer.subwayButton
    }));

    return(
        <div>
            <div className="search-section">
                <SearchPageTitle title='지역 및 카테고리 검색'/>
                <SearchChooseButton buttonName='지역 선택'/>
            </div>
            <div className="map-section">
                <Map/>
                {/* map 관련 컴포넌트 */}
            </div>
        </div>
    );
}

export default SearchByRegion