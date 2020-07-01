import React from "react";
import './Contact.css'
export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div className='Contact-stage'>
                <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/moqknzno"
                    method="POST"
                    className='Contact-form'
                >
                    <label className='email-label' >Email:</label>
                    <input className='input' type="email" name="email" />

                    <label className='message-label' >Message:</label>
                    <input className='input' type="text" name="message" />

                    {status === "SUCCESS" ? <p className= "submit-message">Email sent!</p> : 
                    <button className = "submit-button" >Submit</button>}
                    {status === "ERROR" && <p className= "submit-message">Message Failed to send</p>}
                </form>
            </div>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}