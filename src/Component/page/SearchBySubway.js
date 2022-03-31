import { useSelector } from "react-redux";
import SearchChooseButton from "../button/SearchChooseButton";
import Map from "../Map";
import SearchPageTitle from "../search/SearchPageTitle";


const SearchBySubway = () => {

    const {regionButton, categoryButton, subwayButton} = useSelector(state => ({
        regionButton: state.toggleReducer.regionButton,
        categoryButton: state.toggleReducer.categoryButton,
        subwayButton: state.toggleReducer.subwayButton
    }));

    return(
        <div>
            <div className="search-section">
                <SearchPageTitle title = '지하철 역 및 카테고리 선택'/>
                <SearchChooseButton buttonName = '역 선택'/>
            </div>
            <div className="map-section">
                <Map/>
            </div>
        </div>
    );
}

export default SearchBySubway;