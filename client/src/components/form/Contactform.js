import React, {Fragment} from 'react';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types';

const Contactform = ({form, isLoaded}) => {
        if (isLoaded) {
            return (
                <Fragment>
                    <h1 className="float-left mt-5 ">{form.title.rendered}</h1>
                </Fragment>
            );
        }
        return <Spinner/>
}

Contactform.propTypes = {
    form: PropTypes.object.isRequired,
    isLoaded: PropTypes.bool.isRequired
}

export default Contactform;