import React from 'react';
import CreateUser from './CreateUser';
import ListUser from './ListUser';

const User = () => {    
    return (
        <div>
            <h3 className="text-center">User Details</h3>
            <div className="container py-3">
                <div className="row">
                    <CreateUser />
                    <ListUser />
                </div>
            </div>
        </div>
    )
}

export default User
