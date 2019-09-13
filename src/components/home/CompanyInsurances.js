import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from './Modal';

const CompanyInsurances = (props) => {
    const insurance = useSelector(state => state.insurance);
    const login = useSelector(state => state.login);

    const [insuranceID, setInsuranceID] = useState(-1);

    let companyID = props.match.params.id;

    const onGrabInsurance = (e) => {
        setInsuranceID(e.target.getAttribute('data-insuranceid'));

    }
    return (
        <div className="container">
            <h4 className="text-center">Choose Insurance Scheme</h4>
            <div className="row">
                {insurance.map(insuranceList =>
                    insuranceList.companyID === companyID ?
                        <div key={insuranceList.id} className="col-md-4 mt-5">
                            <div className="card card-sm bg-secondary text-light">
                                <div className="card-header">
                                    <h5 className="mb-0 text-center">     {insuranceList.insuranceName}</h5>
                                </div>
                                <div className="card-body">
                                    <label className="font-weight-bold mr-2">Type:</label>
                                    <p>{insuranceList.type}</p>
                                    <label className="font-weight-bold mr-2">Period:</label>
                                    <p>{insuranceList.period}</p>
                                    <label className="font-weight-bold mr-2">Premium:</label>
                                    <p>{insuranceList.premium}</p>

                                    <button data-insuranceid={insuranceList.id} onClick={onGrabInsurance} data-toggle="modal" data-target="#myModal" className="btn btn-sm btn-block btn-light mt-4" disabled={Object.keys(login).length === 0 && 'disabled'}>{Object.keys(login).length === 0 ? 'Login' : 'Grab Insurance'}</button>

                                    <Modal insuranceID={insuranceID} />
                                    {/* : {alert('login')} */}
                                </div>
                            </div>
                        </div>
                        : '')}
            </div>
        </div>
    )
}

export default CompanyInsurances
