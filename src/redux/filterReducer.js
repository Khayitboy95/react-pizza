const SET_SORT_BY = 'SET_SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';

let initialState = {
    sortBy: 'popular',
    category: 0
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.sortBy
            }
        case SET_CATEGORY:
            return{
                ...state,
                category: action.category
            }
        default:
            return state;
    }
}


export const setSortBy = (sortBy) => ({
    type: SET_SORT_BY,
    sortBy
});
export const setCategory = (category) => ({
    type: SET_CATEGORY,
    category
});


export default filterReducer;