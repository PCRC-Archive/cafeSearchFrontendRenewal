

// define action type
const REGION_TOGGLE = 'REGION_TOGGLE';
const CATEGORY_TOGGLE = 'CATEGORY_TOGGLE';
const SUBWAY_TOGGLE = 'SUBWAY_TOGGLE';
const LOGIN_TOGGLE = 'LOGIN_TOGGLE';

// define action generate function 
    // toggle action
export const regionToggle = () => {
    return{
        type: REGION_TOGGLE,
    };
}

export const categoryToggle = () => {
    return {
        type: CATEGORY_TOGGLE,
    };
}

export const subwayToggle = () => {
    return {
        type: SUBWAY_TOGGLE,
    };
}

export const loginToggle = (success, user_id, nickname, profile_image_url, birthday, email, gender) => {
    console.log(success, nickname, profile_image_url, email, birthday, gender)
    return {
        type: LOGIN_TOGGLE,
        user_id,
        success: success,
        nickname: nickname,
        profile_image_url: profile_image_url,
        email: email,
        birthday: birthday,
        gender: gender,
    };
}