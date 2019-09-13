const optedInsurance = (state = JSON.parse(localStorage.getItem("optedInsurance")) || [], action) => {
    switch (action.type) {
        case 'OPTED_INSURANCE':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}
export default optedInsurance;