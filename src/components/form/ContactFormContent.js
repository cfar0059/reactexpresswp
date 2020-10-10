import React, {Fragment} from 'react';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types';

const ContactFormContent = ({form, isLoaded}) => {
        if (isLoaded) {
            return (
                <Fragment>
                    <div className="text-left" dangerouslySetInnerHTML={{__html: form.content.rendered}}/>
                </Fragment>
            );
        }
        return <Spinner/>
}

ContactFormContent.propTypes = {
    form: PropTypes.object.isRequired,
    isLoaded: PropTypes.bool.isRequired
}

export default ContactFormContent;