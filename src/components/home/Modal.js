import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { optedInsurance } from '../../actions';

const Modal = (props) => {
    const login = useSelector(state => state.login);
    const claimedInsurance = useSelector(state => state.claimedInsurance);
    const dispatch = useDispatch();

    // store in Local Storage
    if (claimedInsurance.length) {
        localStorage.setItem("optedInsurance", JSON.stringify(claimedInsurance));
    }

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const onGrabInsurance = (e) => {
        dispatch(optedInsurance({
            userID: login.id,
            insuranceID: props.insuranceID,
            fromDate,
            toDate
        }));
    }
    return (
        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-md text-dark">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Grab Insurance</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        <label className="font-weight-bold mr-2">Date From:</label>
                        <input type="date" className="form-control" name="fromDate" onChange={(e) => setFromDate(e.target.value)}></input>
                        <label className="font-weight-bold mr-2">Date To:</label>
                        <input type="date" name="toDate" className="form-control" onChange={(e) => setToDate(e.target.value)}></input>

                    </div>

                    <div className="modal-footer">
                        <button onClick={onGrabInsurance} type="button" className="btn btn-secondary" data-dismiss="modal">Submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal
