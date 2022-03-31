import { useSelector } from "react-redux";
import SearchChooseButton from "./button/SearchChooseButton";


const SearchByRegion = () => {

    const {regionButton, categoryButton, subwayButton} = useSelector(state => ({
        regionButton: state.toggleReducer.regionButton,
        categoryButton: state.toggleReducer.categoryButton,
        subwayButton: state.toggleReducer.subwayButton
    }));

    


    return(
        <div>
            <SearchChooseButton buttonName="지역 선택"/>
        </div>
    );
}

export default SearchByRegion