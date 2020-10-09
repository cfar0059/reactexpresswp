import React, {Component} from 'react';

class Contactform extends Component {
    constructor() {
        super();
        this.state = {
            content: []
        }
    }

    //Fetch data from /api/forms
    componentDidMount() {
        fetch('/api/forms')
            .then(res => res.json())
            .then(content => this.setState({content}, () =>
                console.log('Content Fetched..', content
                )));
    }

    render() {
        return (
            <div>
                <h2></h2>
            </div>
        );
    }
}

export default Contactform;