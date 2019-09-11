import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createCompany } from '../../actions';


const Company = () => {
    const company = useSelector(state => state.company);
    const dispatch = useDispatch();

    // store in Local Storage
    if (company.length) {
        localStorage.setItem("company", JSON.stringify(company));
        console.log(JSON.parse(localStorage.getItem('company')));
    }
    // Retrive form data and dispatch
    const handleSubmit = (e) => {
        e.preventDefault();
        let companyObj = {
            companyName: e.target.cName.value,
            address: e.target.cAddress.value,
            contactNumber: e.target.cNum.value
        };
        dispatch(createCompany(companyObj));
    }
    return (
        <div>
            <h3 className="text-center">Company Page</h3>
            <div className="container py-3">
                <div className="row">
                    <div className="mx-auto col-sm-6">
                        <div className="card card-sm">
                            <div className="card-header">
                                <h4 className="mb-0">Create Company</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Company Name</label>
                                        <input type="text" className="form-control" id="name" name="cName" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <textarea className="form-control" id="address" name="cAddress"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number">Contact Number</label>
                                        <input type="tel" className="form-control" id="number" name="cNum" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company