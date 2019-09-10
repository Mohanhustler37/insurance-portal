import React from 'react'

const Insurance = () => {
    return (
        <div>
            <h3 className="text-center">Insurance Page</h3>
            <div className="container py-3">
                <div className="row">
                    <div className="mx-auto col-sm-6">
                        <div className="card card-sm">
                            <div className="card-header">
                                <h4 className="mb-0">Create Insurance</h4>
                            </div>
                            <div className="card-body">
                                <form action="/action_page.php">
                                    <div className="form-group">
                                        <label htmlFor="name">Insurance Name</label>
                                        <input type="name" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="type">Type</label>
                                        <select className="form-control">
                                            <option value="life">Life Insurance</option>
                                            <option value="health">Health Insurance</option>
                                            <option value="vehicle">Vehicle Insurance</option>
                                            <option value="house">House Insurance</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="period">Period</label>
                                        <input type="text" className="form-control" id="period" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="premium">Premium</label><br />
                                        <input type="radio" id="premium1" name="drone" value="premium" className="mr-1"
                                        />
                                        <label htmlFor="premium1" className="mr-3">Yes</label>
                                        <input type="radio" id="premium2" name="drone" value="premium" className="mr-1"
                                        />
                                        <label htmlFor="premium2">No</label>
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

export default Insurance
