import React, {Fragment} from 'react';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types';

const ContactFormContent = ({form, isLoaded}) => {
        if (isLoaded) {
            return (
                <Fragment>
                    <div style={contentStyling} dangerouslySetInnerHTML={{__html: form.content.rendered}}/>
                </Fragment>
            );
        }
        return <Spinner/>
}

ContactFormContent.propTypes = {
    form: PropTypes.object.isRequired,
    isLoaded: PropTypes.bool.isRequired
}

const contentStyling = {
    textAlign: "left",
    opacity: "0.9"
}

export default ContactFormContent;