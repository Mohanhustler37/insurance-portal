import React from 'react';
import CreateUser from './user/CreateUser';
import ListUser from './user/ListUser';

const User = () => {    
    return (
        <div>
            <h3 className="text-center">User Page</h3>
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
