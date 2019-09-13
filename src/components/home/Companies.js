import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Companies = () => {
    const company = useSelector(state => state.company);

    return (
        <div>
            <div className="container">
                <h3 className="text-center mt-4">Welcome to Insurance Portal</h3>
                <div className="row">
                    {company.map(companyList =>
                        <div key={companyList.id} className="col-md-4 mt-5">
                            <div className="card card-sm bg-info text-white">
                                <div className="card-header">
                                    <h5 className="mb-0 text-center">     {companyList.companyName}</h5>
                                </div>
                                <div className="card-body">
                                    <label className="font-weight-bold mr-2">Address:</label>
                                    <p>{companyList.address}</p>
                                    <label className="font-weight-bold mr-2">Contact:</label>
                                    <p>{companyList.contact}</p>
                                    <Link className="btn btn-sm btn-block btn-light mt-4" to={`/company/insurances/${companyList.id}`}>View Insurance</Link>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Companies
