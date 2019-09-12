import React from 'react';
import CreateInsurance from './CreateInsurance';
import ListInsurance from './ListInsurance';

const Insurance = () => {
    return (
        <div>
            <h3 className="text-center">Insurance Page</h3>
            <div className="container py-3">
                <div className="row">
                    <CreateInsurance />
                    <ListInsurance />
                </div>
            </div>
        </div>
    )
}

export default Insurance
