const company = (state = JSON.parse(localStorage.getItem("company")) || [], action) => {
    switch (action.type) {
        case 'CREATE_COMPANY':
            return [
                ...state,
                action.payload
            ]
        case 'UPDATE_COMPANY':
            let company = state;
            let index = action.payload.index;
            company[index].companyName = action.payload.companyName;
            company[index].address = action.payload.address;
            company[index].contact = action.payload.contact;
            localStorage.setItem("company", JSON.stringify(company));
            return JSON.parse(localStorage.getItem("company"));
        case 'DELETE_COMPANY':
            let data = state;
            data.splice(action.payload, 1);
            localStorage.setItem("company", JSON.stringify(data));
            return JSON.parse(localStorage.getItem("company"));
        default:
            return state;
    }
}
export default company;