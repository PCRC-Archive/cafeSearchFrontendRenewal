

// define action type
const REGION_TOGGLE = 'REGION_TOGGLE';
const CATEGORY_TOGGLE = 'CATEGORY_TOGGLE';
const SUBWAY_TOGGLE = 'SUBWAY_TOGGLE';

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