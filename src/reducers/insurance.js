const insurance = (state = JSON.parse(localStorage.getItem("insurance")) || [], action) => {
    switch (action.type) {
        case 'CREATE_INSURANCE':
            return [
                ...state,
                action.payload
            ]
            case 'UPDATE_INSURANCE':
            let insurance = state;
            let index = action.payload.index;
            insurance[index].insuranceName = action.payload.insuranceName;
            insurance[index].type = action.payload.type;
            insurance[index].period = action.payload.period;
            insurance[index].premium = action.payload.premium;
            localStorage.setItem("insurance", JSON.stringify(insurance));
            return JSON.parse(localStorage.getItem("insurance"));
        case 'DELETE_INSURANCE':
            let data = state;
            data.splice(action.payload, 1);
            localStorage.setItem("insurance", JSON.stringify(data));
            return JSON.parse(localStorage.getItem("insurance"));
        default:
            return state;
    }
}
export default insurance;