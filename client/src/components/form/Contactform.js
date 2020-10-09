import React, {Component, Fragment} from 'react';
import axios from 'axios'
import Spinner from '../layout/Spinner'

class Contactform extends Component {
    state = {
        form: {},
        isLoaded: false
    }

    componentDidMount() {
        axios.get(`/api/forms`)
            .then(res => this.setState({
                form: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        const {form, isLoaded} = this.state;
        if (isLoaded) {
            return (
                <Fragment>
                    <hr/>
                    <h1>{form.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html: form.content.rendered}}/>
                </Fragment>
            );
        }
        return <Spinner/>

    }
}

export default Contactform;