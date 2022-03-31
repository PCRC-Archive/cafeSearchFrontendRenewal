
import { useDispatch } from "react-redux";
import { regionToggle, categoryToggle, subwayToggle } from "../../redux/actions/toggle";




const SearchChooseButton = (props, store) => {

    const dispatch = useDispatch();

    const onClick = () => {
        switch (props.buttonName){
            case '지역 선택':
                dispatch(regionToggle());
            case '카테고리 선택':
                dispatch(categoryToggle());
            case '역 선택':
                dispatch(subwayToggle());
        }
    }


    return(
        <div className="Search-Choose-Button-Wrapper">
            <button onClick={onClick}>{props.buttonName}</button>
        </div>
    )

}

export default SearchChooseButton;