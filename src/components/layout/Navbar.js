import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({title}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <span className="nav-custom-color navbar-brand mb-0 h1">{title}</span>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
            </div>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'CONTACT FORM',
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar;