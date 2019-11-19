const mapReducer = (state, action) => {
    switch(action.type) {
        case 'SELECT_COMPANY':
            return action.company;
        case 'DESELECT_COMPANY':
            return null;
        default:
            return state;
    };
}

export default mapReducer;