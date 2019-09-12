import React from 'react';
import CreateCompany from './CreateCompany';
import ListCompany from './ListCompany';

const Company = () => {
    return (
        <div>
            <h3 className="text-center">Company Details</h3>
            <div className="container py-3">
                <div className="row">
                    <CreateCompany />
                    <ListCompany />
                </div>
            </div>
        </div>
    )
}

export default Company