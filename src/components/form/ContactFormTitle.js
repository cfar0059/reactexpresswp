import React, {Fragment} from 'react';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types';

const ContactFormTitle = ({form, isLoaded}) => {
    if (isLoaded) {
        return (
            <Fragment>
                <h1 style={spacing} className="float-left mt-5">{form.title.rendered}</h1>
            </Fragment>
        );
    }
    return <Spinner/>
}

const spacing = {
    letterSpacing: "11px",
    opacity: "1.8",
    fontSize: "44px",
}

ContactFormTitle.propTypes = {
    form: PropTypes.object.isRequired,
    isLoaded: PropTypes.bool.isRequired
}

export default ContactFormTitle;