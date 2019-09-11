import React from 'react'; //, { useState }
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../../../actions';


const ListUser = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');

    const onEditUser = (e) => {
        let userID = e.target.getAttribute('data-userid');

        user.forEach((curUser, index) => {
            if (curUser.id === parseInt(userID)) {
                console.log(index);
                dispatch(editUser(index));
                // setFirstName(curUser.firstName);
                // setLastName(curUser.lastName);
                // setEmail(curUser.email);                
            }
        });
    }
    const onDeleteUser = (e) => {
        let userID = e.target.getAttribute('data-userid');

        user.forEach((curUser, index) => {
            if (curUser.id === parseInt(userID)) {
                dispatch(deleteUser(index));
            }
        });
    }
    return (
        <div className="col-sm-6">
            <div className="card card-sm">
                <div className="card-header">
                    <h4 className="mb-0 text-center">Users List</h4>
                </div>
                <div className="card-body">
                    <ul className="list-group mb-5">
                        {user.map(userList =>
                            <li
                                key={userList.id}
                                className="list-group-item mb-3">
                                {userList.firstName}
                                <button data-userid={userList.id} onClick={onDeleteUser} className="btn btn-sm btn-danger float-right">Delete</button>
                                <button data-userid={userList.id} onClick={onEditUser} className="btn btn-sm btn-warning float-right mr-3">Edit</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListUser
