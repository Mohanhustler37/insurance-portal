import React from 'react'; //, { useState }
import { useSelector, useDispatch } from 'react-redux';
import { createUser } from '../../../actions';


const CreateUser = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');

    // store in Local Storage
    if (user.length) {
        localStorage.setItem("users", JSON.stringify(user));
    }

    // Retrive form data and dispatch
    const handleSubmit = (e) => {
        e.preventDefault();
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

        // GET
        // JSON.parse(localStorage.getItem("users"));

        document.getElementById("user-form").reset();
    }
    // const firstNameChange = (e) => {
    //     setFirstName(e.target.value);
    // }
    // const lastNameChange = (e) => {
    //     setLastName(e.target.value);
    // }
    // const emailChange = (e) => {
    //     setEmail(e.target.value);
    // }
    return (
        <div className="col-sm-6">
            <div className="card card-sm">
                <div className="card-header">
                    <h4 className="mb-0 text-center">Create User</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit} id="user-form">
                        <div className="form-group">
                            <label htmlFor="fname">First Name</label>
                            <input type="name" className="form-control" id="fname" name="fname"/>
                            {/* value={firstName} onChange={firstNameChange}  */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" className="form-control" id="lname" name="lname" />
                            {/* value={lastName} onChange={lastNameChange} */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email"  />
                            {/* value={email} onChange={emailChange} */}
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser

