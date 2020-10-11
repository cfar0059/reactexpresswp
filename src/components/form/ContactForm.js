import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

const ContactForm = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    });

    const validEmailRegex =
        RegExp(/\S+@\S+\.\S+/);

    const [result, setResult] = useState(null);

    /**
     * Make Post Request using axios and pass form data as JSON object
     * If request successfull clear entered data and set state using API response
     * If request fails set error object in catch
     * IMPORANT - Return state values to '' to avoid undefined error. !!!
     * @param event
     */
    const sendEmail = event => {
        event.preventDefault();
        console.log(state);

        if (validateForm(state.errors)) {
            axios
                .post('/api/send', {...state})
                .then(res => {
                    setResult(res.data);
                    console.log(res.data);
                    setState({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                        errors: {
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                        }
                    });
                })
                .catch(() => {
                    setResult({success: false, message: 'Something went wrong. Try again later'});
                });
        } else {
            console.error('Invalid Form')
        }

    };

    /**
     * Validate fields as per requirements
     * Each input field has an added onInputChange handler.
     * Sets State as per entered Values
     * @param event
     */
    const onInputChange = event => {
        event.preventDefault();

        const {name, value} = event.target;
        const errors = state.errors;

        switch (name) {
            case 'name':
                errors.name =
                    !value.match(/^[a-zA-Z ]+$/)
                        ? 'Only letters are accepted!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            default:
                break;
        }

        setState({
            ...state,
            errors, [name]: value
        });

        console.log(errors);
    };

    /**
     * Checks if form is valid.
     * If Form has error preset set Validation to False.
     */
    const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            // if we have an error string set valid to false
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }

    /**
     * Checks if form is Valid and Input fields contain value.
     * If so - Enable Button
     * @type {boolean|number|number}
     */
    const isEnabled = validateForm(state.errors) && state.name.length > 0 && state.email.length && state.subject.length && state.message.length

    return (
        <div>
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`} style={resultStyle}>
                    {result.message}
                </p>
            )}
            <form onSubmit={sendEmail}>
                <Form.Group controlId="name">
                    <Form.Label className="float-left form-field-opacity">Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={onInputChange}
                    />
                    {state.errors.name.length > 0 &&
                    <span style={inputError}>{state.errors.name}</span>}
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className="float-left form-field-opacity">Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={state.email}
                        onChange={onInputChange}
                    />
                    {state.errors.email.length > 0 &&
                    <span style={inputError}>{state.errors.email}</span>}
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label className="float-left form-field-opacity">Subject</Form.Label>
                    <Form.Control
                        type="text"
                        name="subject"
                        value={state.subject}
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label className="float-left form-field-opacity">Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        value={state.message}
                        rows="7"
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Button disabled={!isEnabled} className="float-left btn-success btn-custom" variant="primary"
                        type="submit">
                    CONTACT
                </Button>
            </form>
        </div>
    );
};

const resultStyle = {
    fontSize: '1rem',
    textAlign: 'left',
    marginTop: '1em'
}

const inputError = {
    marginTop: '1em',
    textAlign: 'left',
    fontWeight: 'bold',
    float: 'left',
    backgroundColor: '#d24b4b',
    fontSize: '0.875rem',
    padding: '0.25em'
}

export default ContactForm;