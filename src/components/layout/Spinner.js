import React, {Fragment} from 'react';
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <Fragment>
            <img
                src={spinner}
                alt="Loading..."
                style={{width: '100px', margin: 'auto', display: 'block', left: '50%', top: '20%', position: 'fixed'}}/>
        </Fragment>
    );
}

export default Spinner;