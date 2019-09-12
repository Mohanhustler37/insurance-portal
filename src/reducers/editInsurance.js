const editInsurance = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_INSURANCE':
            return action.payload;
        default:
            return state;
    }
}
export default editInsurance;