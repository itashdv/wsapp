// main reducer for the whole app..
const appReducer = (state, action) => {
    switch(action.type) {
        case 'SELECT_CURRENT_COMPANY':
            return action.company;
        case 'RESET_CURRENT_COMPANY':
            return null;
        default:
            return state;
    };
}

export default appReducer;