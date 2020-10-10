import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

const Contactform = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [result, setResult] = useState(null);

    /**
     * Make Post Request using axios and pass form data as JSON object
     * If request successfull clear entered data and set state using API response
     * If request fails set error object in catch
     * @param event
     */
    const sendEmail = event => {
        event.preventDefault();
        axios
            .post('/api/send', {...state})
            .then(response => {
                setResult(response.data);
                setState({name: '', email: '', subject: '', message: ''});
            })
            .catch(() => {
                setResult({success: false, message: 'Something went wrong. Try again later'});
            });
    };

    /**
     * Each input field has added onInputChange handler.
     * @param event
     */
    const onInputChange = event => {
        const {name, value} = event.target;

        setState({
            ...state,
            [name]: value
        });
    };

    return (
        <div>
            <form onSubmit={sendEmail}>
                <Form.Group controlId="name">
                    <Form.Label className="float-left">Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className="float-left">Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={state.email}
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label className="float-left">Subject</Form.Label>
                    <Form.Control
                        type="text"
                        name="Subject"
                        value={state.subject}
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label className="float-left">Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="Message"
                        value={state.message}
                        rows="3"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Button className="float-left" variant="primary" type="submit">
                    Contact
                </Button>
            </form>
        </div>
    );
};

export default Contactform;