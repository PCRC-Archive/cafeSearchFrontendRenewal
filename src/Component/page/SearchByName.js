import { useSelector } from "react-redux";
import SearchChooseButton from '../button/SearchChooseButton';
import Map from '../Map';
import SearchPageTitle from '../search/SearchPageTitle';

const SearchByName = () => {


    const {regionButton, categoryButton, subwayButton} = useSelector(state => ({
        regionButton: state.toggleReducer.regionButton,
        categoryButton: state.toggleReducer.categoryButton,
        subwayButton: state.toggleReducer.subwayButton
    }));

    return(
        <div>
            <div className="search-section">

                <SearchPageTitle title='카페명 입력'/>
                <div className="choose-section">
                    <SearchChooseButton buttonName='지역 선택'/>
                    <SearchChooseButton buttonName='카테고리 선택'/>
                </div>
            </div>
            <div className="map-section">
                <Map/>
            </div>
        </div>
            
        
    );
}

export default SearchByName;