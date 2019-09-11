import user from './user';
import company from './company';
import insurance from './insurance';
import { combineReducers } from 'redux';

const allReducer = combineReducers(
    {
        user,
        company,
        insurance
    }
);

export default allReducer;