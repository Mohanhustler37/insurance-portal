const users = (state = JSON.parse(localStorage.getItem("users")) || [], action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return [
                ...state,
                action.payload
            ]
        case 'UPDATE_USER':
            let users = state;
            let index = action.payload.index;
            users[index].firstName = action.payload.firstName;
            users[index].lastName = action.payload.lastName;
            users[index].email = action.payload.email;
            localStorage.setItem("users", JSON.stringify(users));
            return JSON.parse(localStorage.getItem("users"));
        case 'DELETE_USER':
            let data = state;
            data.splice(action.payload, 1);
            localStorage.setItem("users", JSON.stringify(data));
            return JSON.parse(localStorage.getItem("users"));
        default:
            return state;
    }
}
export default users;