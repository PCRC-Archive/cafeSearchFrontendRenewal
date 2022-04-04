


// init state
const initialState = {
    regionButton : false,
    categoryButton : false,
    subwayButton : false,   
    user: {
        login: false,
        user_id: '',
        nickname: '',
        profile_image_url: '',
        birth_date: '',
        email: '',
        gender: '',
    }
};

// define action type
const REGION_TOGGLE = 'REGION_TOGGLE';
const CATEGORY_TOGGLE = 'CATEGORY_TOGGLE';
const SUBWAY_TOGGLE = 'SUBWAY_TOGGLE';
const LOGIN_TOGGLE = 'LOGIN_TOGGLE';


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
        case LOGIN_TOGGLE:
            return {
                ...state,
                user: {
                    login: action.success,
                    user_id: action.user_id,
                    nickname: action.nickname,
                    profile_image_url: action.profile_image_url,
                    birthday: action.birthday,
                    email: action.email,
                    gender: action.gender,
                }
            }
        default:
            return state;
            
    }
}

export default toggleReducer;

