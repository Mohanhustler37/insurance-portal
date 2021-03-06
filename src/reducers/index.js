import user from './user';
import editUser from './editUser';
import company from './company';
import editCompany from './editCompany';
import insurance from './insurance';
import editInsurance from './editInsurance';
import login from './login';
import optedInsurance from './optedInsurance';

import { combineReducers } from 'redux';

const allReducer = combineReducers(
    {
        user,
        userDetails: editUser,
        company,
        companyDetails: editCompany,
        insurance,
        insuranceDetails: editInsurance,
        login,
        claimedInsurance: optedInsurance
    }
);

export default allReducer;