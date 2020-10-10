import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layout/Navbar'
import Contactformtitle from './components/form/Contactformtitle'
import Contactform from './components/form/Contactform'
import Contactformcontent from './components/form/Contactformcontent'
import axios from "axios";

class App extends Component {
    state = {
        form: {},
        isLoaded: false
    }

    /**
     * Call /api/forms after component output has been rendered
     * Set state for form and isLoaded
     */
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
                    <div className="row">
                        <div className="col-lg-12">
                            <Contactformtitle isLoaded={this.state.isLoaded} form={this.state.form}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <Contactform/>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Contactformcontent className="col" isLoaded={this.state.isLoaded} form={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
