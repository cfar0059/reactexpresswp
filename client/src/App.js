import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contactform from './components/form/Contactform'
import Navbar from './components/layout/Navbar'
import axios from "axios";

class App extends Component {
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
        return (
            <div className="App">
                <Navbar/>
                <div className="content container">
                    <Contactform isLoaded={this.state.isLoaded} form={this.state.form} />
                </div>
            </div>
        );
    }
}

export default App;
