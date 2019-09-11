const insurance = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_INSURANCE':
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        default:
            return state;
    }
}
export default insurance;