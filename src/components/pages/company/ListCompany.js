import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCompany, editCompany } from '../../../actions';

const ListCompany = () => {
    const company = useSelector(state => state.company);
    const dispatch = useDispatch();

    const onEditCompany = (e) => {
        let companyID = e.target.getAttribute('data-companyid');

        company.forEach((curCompany) => {
            if (curCompany.id === parseInt(companyID)) {
                dispatch(editCompany(curCompany));
            }
        });
    }
    const onDeleteCompany = (e) => {
        let companyID = e.target.getAttribute('data-companyid');

        company.forEach((curCompany, index) => {
            if (curCompany.id === parseInt(companyID)) {
                dispatch(deleteCompany(index));
            }
        });
    }
    return (
        <div className="col-sm-8">
            <div className="card card-sm">
                <div className="card-header">
                    <h4 className="mb-0 text-center">Company List</h4>
                </div>
                <div className="card-body">
                    <ul className="list-group mb-5">
                        {company.length === 0 && <li className="list-group-item mb-3">No company to list</li>
                        }
                        {company.map(companyList =>
                            <li
                                key={companyList.id}
                                className="list-group-item mb-3">
                                <span className="mr-5">{companyList.companyName}</span>
                                <span>{companyList.address}</span>
                                <button data-companyid={companyList.id} onClick={onDeleteCompany} className="btn btn-sm btn-danger float-right">Delete</button>
                                <button data-companyid={companyList.id} onClick={onEditCompany} className="btn btn-sm btn-warning float-right mr-3">Edit</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListCompany
