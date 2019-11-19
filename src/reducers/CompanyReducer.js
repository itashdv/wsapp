const companyReducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_COMPANIES':
            return action.companies;
        default:
            return state;
    }
};

export default companyReducer;