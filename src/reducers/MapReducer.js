// reducer for the markers on the map on home page..
const mapReducer = (state, action) => {
    switch(action.type) {
        case 'SELECT_CURRENT_COMPANY':
            return action.company;
        case 'RESET_CURRENT_COMPANY':
            return null;
        default:
            return state;
    };
}

export default mapReducer;