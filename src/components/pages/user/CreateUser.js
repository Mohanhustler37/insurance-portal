import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createUser, editUser, updateUser } from '../../../actions';

const CreateUser = () => {
    const user = useSelector(state => state.user);
    const userDetails = useSelector(state => state.userDetails);
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setUserID] = useState(-1);

    // EDIT USER
    if (Object.keys(userDetails).length !== 0) {
        setFirstName(userDetails.firstName);
        setLastName(userDetails.lastName);
        setEmail(userDetails.email);
        setUserID(userDetails.id);
        dispatch(editUser({}));
    }

    // store in Local Storage
    if (user.length) {
        localStorage.setItem("users", JSON.stringify(user));
    }

    // Retrive form data and dispatch
    const handleSubmit = (e) => {
        e.preventDefault();
        // CREATE USER
        if (userID === -1) {
            let ID;
            if (user.length) {
                ID = user[user.length - 1].id + 1;
            }
            else {
                ID = 1;
            }
            let userObj = {
                id: ID,
                firstName: e.target.fname.value,
                lastName: e.target.lname.value,
                email: e.target.email.value
            };
            dispatch(createUser(userObj));
            onClear();
        }
        // UPDATE USER
        else {
            user.forEach((existingUser, index) => {
                if (existingUser.id === userID) {
                    dispatch(updateUser({
                        index,
                        firstName,
                        lastName,
                        email
                    }));
                }
            });
            onClear();
        }
    }
    // CLEAR FORM INPUTS VALUE
    const onClear = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setUserID(-1);
    }
    // ONCHANGE EVENTS
    const firstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameChange = (e) => {
        setLastName(e.target.value);
    }
    const emailChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div className="col-sm-4">
            <div className="card card-sm">
                <div className="card-header">
                    <h4 className="mb-0 text-center">Create User</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fname">First Name</label>
                            <input type="name" className="form-control" id="fname" name="fname" value={firstName} onChange={firstNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" className="form-control" id="lname" name="lname" value={lastName} onChange={lastNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={emailChange} />
                        </div>
                        <button type="submit" className="btn btn-primary mr-3">{userID !== -1 ? 'Update' : 'Submit'}</button>
                        <button type="button" className="btn btn-dark" onClick={onClear}>Clear</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser

