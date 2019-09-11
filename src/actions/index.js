// let userId = 0;
let companyId = 0;
let insuranceId = 0;
// create user
export const createUser = text => ({
    type: 'CREATE_USER',
    payload: text
    
});

export const deleteUser = text => ({
    type: 'DELETE_USER',
    payload: text
    
});

export const editUser = text => ({
    type: 'EDIT_USER',
    payload: text
    
});

export const createCompany = text => ({
    type: 'CREATE_COMPANY',
    payload: {
        id: companyId++,
        ...text
    }
});
export const createInsurance = text => ({
    type: 'CREATE_INSURANCE',
    payload: {
        id: insuranceId++,
        ...text
    }
});