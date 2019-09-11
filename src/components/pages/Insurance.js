import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createInsurance } from '../../actions';

const Insurance = () => {
    const insurance = useSelector(state => state.insurance);
    const dispatch = useDispatch();

    // store in Local Storage
    if (insurance.length) {
        localStorage.setItem("insurance", JSON.stringify(insurance));
        console.log(JSON.parse(localStorage.getItem('insurance')));
    }
    // Retrive form data and dispatch
    const handleSubmit = (e) => {
        e.preventDefault();
        let insuranceObj = {
            insuranceName: e.target.iName.value,
            type: e.target.iType.value,
            period: e.target.iPeriod.value,
            premium: e.target.iPremium.value
        };

        dispatch(createInsurance(insuranceObj));
    }
    return (
        <div>
            <h3 className="text-center">Insurance Page</h3>
            <div className="container py-3">
                <div className="row">
                    <div className="mx-auto col-sm-6">
                        <div className="card card-sm">
                            <div className="card-header">
                                <h4 className="mb-0">Create Insurance</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Insurance Name</label>
                                        <input type="name" className="form-control" id="name" name="iName" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="type">Type</label>
                                        <select className="form-control" name="iType">
                                            <option value="life">Life Insurance</option>
                                            <option value="health">Health Insurance</option>
                                            <option value="vehicle">Vehicle Insurance</option>
                                            <option value="house">House Insurance</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="period">Period</label>
                                        <input type="text" className="form-control" id="period" name="iPeriod" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="premium">Premium</label><br />
                                        <input type="radio" id="premium1" name="iPremium" value="Yes" className="mr-1"
                                        />
                                        <label htmlFor="premium1" className="mr-3">Yes</label>
                                        <input type="radio" id="premium2" name="iPremium" value="No" className="mr-1"
                                        />
                                        <label htmlFor="premium2">No</label>
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

export default Insurance
