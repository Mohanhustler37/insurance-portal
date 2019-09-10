import React from 'react'

const Company = () => {
    return (
        <div>
            <h3 className="text-center">Company Page</h3>
            <div className="container py-3">
                <div className="row">
                    <div className="mx-auto col-sm-6">
                        <div className="card card-sm">
                            <div className="card-header">
                                <h4 className="mb-0">Create Company</h4>
                            </div>
                            <div className="card-body">
                                <form action="/">
                                    <div className="form-group">
                                        <label htmlFor="name">Company Name</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <textarea className="form-control" id="address"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number">Contact Number</label>
                                        <input type="tel" className="form-control" id="number" />
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

export default Company