import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../../../actions';


const ListUser = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onEditUser = (e) => {
        let userID = e.target.getAttribute('data-userid');

        user.forEach((curUser) => {
            if (curUser.id === parseInt(userID)) {
                dispatch(editUser(curUser));
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
        <div className="col-sm-8">
            <div className="card card-sm">
                <div className="card-header">
                    <h4 className="mb-0 text-center">Users List</h4>
                </div>
                <div className="card-body">
                    <ul className="list-group mb-5">
                        {user.length === 0 && <li className="list-group-item mb-3">No users to list</li>
                        }
                        {user.map(userList =>
                            <li
                                key={userList.id}
                                className="list-group-item mb-3">
                                <span className="mr-5">{userList.firstName}</span>
                                <span>{userList.email}</span>
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
