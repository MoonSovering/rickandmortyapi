import React from 'react'

export const Navbar = ({ brand }) => {
    return (
        <div className="app">
            <nav className="navbar navbar-dark ">
                <div className="container">
                    <a className="navbar-brand text-uppercase" href="/">{}</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar