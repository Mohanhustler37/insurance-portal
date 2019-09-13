// USER
export const createUser = text => ({
    type: 'CREATE_USER',
    payload: text

});

export const editUser = text => ({
    type: 'EDIT_USER',
    payload: text

});

export const updateUser = text => ({
    type: 'UPDATE_USER',
    payload: text

});

export const deleteUser = text => ({
    type: 'DELETE_USER',
    payload: text

});

// COMPANY
export const addCompany = text => ({
    type: 'CREATE_COMPANY',
    payload: text
});

export const editCompany = text => ({
    type: 'EDIT_COMPANY',
    payload: text

});

export const updateCompany = text => ({
    type: 'UPDATE_COMPANY',
    payload: text
});

export const deleteCompany = text => ({
    type: 'DELETE_COMPANY',
    payload: text

});

// INSURANCE
export const addInsurance = text => ({
    type: 'CREATE_INSURANCE',
    payload: text
});

export const editInsurance = text => ({
    type: 'EDIT_INSURANCE',
    payload: text

});

export const updateInsurance = text => ({
    type: 'UPDATE_INSURANCE',
    payload: text
});

export const deleteInsurance = text => ({
    type: 'DELETE_INSURANCE',
    payload: text

});

// LOGIN
export const loginUser = text => ({
    type: 'LOGIN',
    payload: text

});

// OPTED INSURANCE
export const optedInsurance = text => ({
    type: 'OPTED_INSURANCE',
    payload: text

});