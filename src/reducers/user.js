const users = (state = JSON.parse(localStorage.getItem("users")) || [], action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return [
                ...state,
                action.payload
            ]
        case 'DELETE_USER':
            let data = state;
            data.splice(action.payload, 1);
            localStorage.setItem("users", JSON.stringify(data));
            return JSON.parse(localStorage.getItem("users"));
        case 'EDIT_USER':
            console.log(action.payload);
            return state;
        default:
            return state;
    }
}
export default users;