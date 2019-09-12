import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteInsurance, editInsurance } from '../../../actions';

const ListInsurance = () => {
    const insurance = useSelector(state => state.insurance);
    const dispatch = useDispatch();

    const onEditInsurance = (e) => {
        let insuranceID = e.target.getAttribute('data-insuranceid');

        insurance.forEach((curInsurance) => {
            if (curInsurance.id === parseInt(insuranceID)) {
                dispatch(editInsurance(curInsurance));
            }
        });
    }
    const onDeleteInsurance = (e) => {
        let insuranceID = e.target.getAttribute('data-insuranceid');

        insurance.forEach((curInsurance, index) => {
            if (curInsurance.id === parseInt(insuranceID)) {
                dispatch(deleteInsurance(index));
            }
        });
    }
    return (
        <div className="col-sm-8">
            <div className="card card-sm">
                <div className="card-header">
                    <h4 className="mb-0 text-center">Insurance List</h4>
                </div>
                <div className="card-body">
                    <ul className="list-group mb-5">
                        {insurance.length === 0 && <li className="list-group-item mb-3">No insurance to list</li>
                        }
                        {insurance.map(insuranceList =>
                            <li
                                key={insuranceList.id}
                                className="list-group-item mb-3">
                                <span className="mr-5">{insuranceList.insuranceName}</span>
                                <span>{insuranceList.type}</span>
                                <button data-insuranceid={insuranceList.id} onClick={onDeleteInsurance} className="btn btn-sm btn-danger float-right">Delete</button>
                                <button data-insuranceid={insuranceList.id} onClick={onEditInsurance} className="btn btn-sm btn-warning float-right mr-3">Edit</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListInsurance
