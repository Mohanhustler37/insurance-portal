import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
            <div className="container">
                <a className="navbar-brand" href="/">Insurance Portal</a>
                <button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/company">Company</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/insurance">Insurance</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">User</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
