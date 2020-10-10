import React, {Fragment} from 'react';
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types';

const Contactformcontent = ({form, isLoaded}) => {
        if (isLoaded) {
            return (
                <Fragment>
                    <h1 className="mt-5 ">{form.title.rendered}</h1>
                </Fragment>
            );
        }
        return <Spinner/>
}

Contactformcontent.propTypes = {
    form: PropTypes.object.isRequired,
    isLoaded: PropTypes.bool.isRequired
}

export default Contactformcontent;