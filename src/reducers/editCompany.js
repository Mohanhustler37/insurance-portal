const editCompany = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_COMPANY':
            return action.payload;
        default:
            return state;
    }
}
export default editCompany;