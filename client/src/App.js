import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contactform from './components/form/Contactform'
import Navbar from './components/layout/Navbar'

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <Contactform/>
            </div>
        </div>
    );
}

export default App;
