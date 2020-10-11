import React, {Fragment} from 'react';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types';
import {useMediaQuery} from 'react-responsive'

const ContactFormTitle = ({form, isLoaded}) => {
    const isMobileDevice = useMediaQuery({
        query: '(max-width: 425px)'
    })

    if (isLoaded) {
        return (
            <Fragment>
                <h1 style={!isMobileDevice ? titleStyling : titleStyling && mediaTitleStyling}
                    className="float-left mt-5">{form.title.rendered}</h1>
            </Fragment>
        );
    }
    return <Spinner/>
}

const titleStyling = {
    letterSpacing: "0.75rem",
    opacity: "1.8",
    fontSize: "2.75rem",
}

const mediaTitleStyling = {
    fontSize: "2.2rem",
}

ContactFormTitle.propTypes = {
    form: PropTypes.object.isRequired,
    isLoaded: PropTypes.bool.isRequired
}

export default ContactFormTitle;