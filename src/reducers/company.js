const company = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_COMPANY':
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
export default company;