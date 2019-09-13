import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addInsurance, editInsurance, updateInsurance } from '../../../actions';

const CreateInsurance = () => {
    const insurance = useSelector(state => state.insurance);
    const company = useSelector(state => state.company);

    const insuranceDetails = useSelector(state => state.insuranceDetails);
    const dispatch = useDispatch();

    const [insuranceName, setInsuranceName] = useState('');
    const [type, setType] = useState('');
    const [period, setPeriod] = useState('');
    const [premium, setPremium] = useState('');
    const [insuranceID, setInsuranceID] = useState(-1);
    const [companyID, setCompanyID] = useState(-1);

    // EDIT INSURANCE
    if (Object.keys(insuranceDetails).length !== 0) {
        setInsuranceName(insuranceDetails.insuranceName);
        setType(insuranceDetails.type);
        setPeriod(insuranceDetails.period);
        setPremium(insuranceDetails.premium);
        setInsuranceID(insuranceDetails.id);

        dispatch(editInsurance({}));
    }

    // store in Local Storage
    if (insurance.length) {
        localStorage.setItem("insurance", JSON.stringify(insurance));
    }
    // Retrive form data and dispatch
    const handleSubmit = (e) => {
        e.preventDefault();
        // CREATE INSURANCE
        if (insuranceID === -1) {
            let ID;
            if (insurance.length) {
                ID = insurance[insurance.length - 1].id + 1;
            }
            else {
                ID = 1;
            }
            let insuranceObj = {
                id: ID,
                companyID: companyID,
                insuranceName: e.target.iName.value,
                type: e.target.iType.value,
                period: e.target.iPeriod.value,
                premium: e.target.iPremium.value
            };

            dispatch(addInsurance(insuranceObj));
            onClear();
        }
        // UPDATE INSURANCE
        else {
            insurance.forEach((existingInsurance, index) => {
                if (existingInsurance.id === insuranceID) {
                    dispatch(updateInsurance({
                        index,
                        companyID: companyID,
                        insuranceName: e.target.iName.value,
                        type,
                        period,
                        premium
                    }));
                }
            });
            onClear();
        }
    }
    // CLEAR FORM INPUTS VALUE
    const onClear = () => {
        setInsuranceName('');
        setType('');
        setPeriod('');
        setPremium('');
        setInsuranceID(-1);
    }
    // ONCHANGE EVENTS
    const insuranceNameChange = (e) => {
        let companyID = e.target[e.target.selectedIndex].getAttribute('data-companyid');
        setCompanyID(companyID);
        setInsuranceName(e.target.value);
    }
    const typeChange = (e) => {
        setType(e.target.value);
    }
    const periodChange = (e) => {
        setPeriod(e.target.value);
    }
    const premiumChange = (e) => {
        setPremium(e.target.value);
    }
    return (
        <div className="col-sm-4">
            <div className="card card-sm">
                <div className="card-header">
                    <h4 className="mb-0">Create Insurance</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Company Name</label>
                            <select value={insuranceName} onChange={insuranceNameChange} className="form-control" name="iName">
                                <option value="-1">--select--</option>
                                {company.map(companyList =>
                                    <option data-companyid={companyList.id} key={companyList.id} value={companyList.companyName}>{companyList.companyName}</option>
                                )}
                            </select>

                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select value={type} onChange={typeChange} className="form-control" name="iType">
                                <option value="life">Life Insurance</option>
                                <option value="health">Health Insurance</option>
                                <option value="vehicle">Vehicle Insurance</option>
                                <option value="house">House Insurance</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="period">Period</label>
                            <input type="text" className="form-control" id="period" name="iPeriod" value={period} onChange={periodChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="premium">Premium</label><br />
                            <input checked={premium === 'Yes'} value="Yes" onChange={premiumChange} type="radio" id="premium1" name="iPremium" className="mr-1"
                            />
                            <label htmlFor="premium1" className="mr-3">Yes</label>
                            <input checked={premium === 'No'} value="No" onChange={premiumChange} type="radio" id="premium2" name="iPremium" className="mr-1"
                            />
                            <label htmlFor="premium2">No</label>
                        </div>
                        <button type="submit" className="btn btn-primary mr-3">{insuranceID !== -1 ? 'Update' : 'Submit'}</button>
                        <button type="button" className="btn btn-dark" onClick={onClear}>Clear</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateInsurance
