const defaultState = {
    items:[],
    isFetching: true,
    currentPage:1,
    perPage:10,
    totalCount:0
}

export default function reposReducer( state = defaultState, action){
    switch (action.type){
        case  'SET_REPOSES':
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
}

export const setReposes = (reposes) => ({
    type:'SET_REPOSES',
    payload:reposes
});

export const setCurrentPage = (currentPage) => ({
    type:'SET_CURRENT_PAGE',
    payload:currentPage
});