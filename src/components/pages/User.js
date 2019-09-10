import React, { useState } from 'react';


const User = () => {
    // const [user, setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            // id: Math.floor(Math.random() * 1000000)
            firstName: e.target.fname.value,
            lastName: e.target.lname.value,
            email: e.target.email.value
        };

        let users = JSON.parse(localStorage.getItem('users') || '[]');

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        // LOCAL STORAGE
        // localStorage.setItem("key", value);
        // var storedValue = localStorage.getItem("key");
        // localStorage.removeItem("key");


        // GET
        // var users = JSON.parse(localStorage.getItem("users"));
        // users.forEach(function (user, index) {
        //     console.log(user);
        // });

    }
    return (
        <div>
            <h3 className="text-center">User Page</h3>
            <div className="container py-3">
                <div className="row">
                    <div className="mx-auto col-sm-6">
                        <div className="card card-sm">
                            <div className="card-header">
                                <h4 className="mb-0">Create User</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="fname">First Name</label>
                                        <input type="name" className="form-control" id="fname" name="fname" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lname">Last Name</label>
                                        <input type="text" className="form-control" id="lname" name="lname" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" />
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

export default User
