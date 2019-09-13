import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../actions';

const Navbar = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState(-1);

    const userNameChange = (e) => {
        let selectedUserID = e.target[e.target.selectedIndex].getAttribute('data-userid');
        setUserID(selectedUserID);

        setUserName(e.target.value);
    }
    const onLogin = () => {
        dispatch(loginUser({ id: userID }));
        // console.log('submitted');
        // console.log(userID);
    }
    return (
        <Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Insurance Portal</Link>
                    <button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/company">Company</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/insurance">Insurance</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user">User</Link>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="modal" data-target="#loginModal" className="nav-link" href="/">Login</a>

                                <div className="modal" id="loginModal" aria-hidden="true" style={{ display: 'none' }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <form>
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Login</h5>
                                                    <button className="close" data-dismiss="modal">×</button>
                                                </div>
                                                <div className="modal-body">

                                                    <div className="form-group">
                                                        <label htmlFor="username">Username</label>
                                                        <select value={userName} onChange={userNameChange} className="form-control" name="userName">
                                                            <option value="-1">--select--</option>
                                                            {user.map(userList =>
                                                                <option data-userid={userList.id} key={userList.id} value={userList.firstName}>{userList.firstName}</option>
                                                            )}
                                                        </select>
                                                    </div>

                                                </div>
                                                <div className="modal-footer">
                                                    <button onClick={onLogin} type="submit" className="btn btn-primary" data-dismiss="modal">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <button class="btn btn-dark">Login</button> */}
        </Fragment>
    )
}

export default Navbar
