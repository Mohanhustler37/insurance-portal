import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCompany, editCompany, updateCompany } from '../../../actions';

const CreateCompany = () => {
    const company = useSelector(state => state.company);
    const companyDetails = useSelector(state => state.companyDetails);
    const dispatch = useDispatch();

    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [companyID, setCompanyID] = useState(-1);

    // EDIT COMPANY
    if (Object.keys(companyDetails).length !== 0) {
        setCompanyName(companyDetails.companyName);
        setAddress(companyDetails.address);
        setContact(companyDetails.contact);
        setCompanyID(companyDetails.id);

        dispatch(editCompany({}));
    }

    // store in Local Storage
    if (company.length) {
        localStorage.setItem("company", JSON.stringify(company));
    }
    // Retrive form data and dispatch
    const handleSubmit = (e) => {
        e.preventDefault();
        // CREATE COMPANY
        if (companyID === -1) {
            let ID;
            if (company.length) {
                ID = company[company.length - 1].id + 1;
            }
            else {
                ID = 1;
            }
            let companyObj = {
                id: ID,
                companyName: e.target.cName.value,
                address: e.target.cAddress.value,
                contact: e.target.cNum.value
            };
            dispatch(addCompany(companyObj));
            onClear();
        }
        // UPDATE COMPANY
        else {
            company.forEach((existingCompany, index) => {
                if (existingCompany.id === companyID) {
                    dispatch(updateCompany({
                        index,
                        companyName,
                        address,
                        contact
                    }));
                }
            });
            onClear();
        }
    }
    // CLEAR FORM INPUTS VALUE
    const onClear = () => {
        setCompanyName('');
        setAddress('');
        setContact('');
        setCompanyID(-1);
    }
    // ONCHANGE EVENTS
    const companyNameChange = (e) => {
        setCompanyName(e.target.value);
    }
    const addressChange = (e) => {
        setAddress(e.target.value);
    }
    const contactChange = (e) => {
        setContact(e.target.value);
    }
    return (
        <div className="col-sm-4">
            <div className="card card-sm">
                <div className="card-header">
                    <h4 className="mb-0">Create Company</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Company Name</label>
                            <input type="text" className="form-control" id="name" name="cName" value={companyName} onChange={companyNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea className="form-control" id="address" name="cAddress" value={address} onChange={addressChange} ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Contact Number</label>
                            <input type="text" className="form-control" id="number" name="cNum" value={contact} onChange={contactChange} />
                        </div>
                        <button type="submit" className="btn btn-primary mr-3">{companyID !== -1 ? 'Update' : 'Submit'}</button>
                        <button type="button" className="btn btn-dark" onClick={onClear}>Clear</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCompany
