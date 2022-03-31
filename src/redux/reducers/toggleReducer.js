


// init state
const initialState = {
    regionButton : false,
    categoryButton : false,
    subwayButton : false,   
};

// define action type
const REGION_TOGGLE = 'REGION_TOGGLE';
const CATEGORY_TOGGLE = 'CATEGORY_TOGGLE';
const SUBWAY_TOGGLE = 'SUBWAY_TOGGLE';


const toggleReducer = (state = initialState, action) => {
    switch(action.type){
        case REGION_TOGGLE:
            return{
                ...state,
                regionButton : !state.regionButton
            };
        case CATEGORY_TOGGLE:
            return{
                ...state,
                categoryButton : !state.categoryButton
            };
        case SUBWAY_TOGGLE:
            return{
                ...state,
                subwayButton : !state.subwayButton
            };
        default:
            return state;
            
    }
}

export default toggleReducer;

