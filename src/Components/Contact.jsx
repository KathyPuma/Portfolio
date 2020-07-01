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
                    className='Contacfot-form'
                >

                    <label className='email-label' >Email:</label>
                    <input className='input' type="email" name="email" />
      
                    <label className='message-label' >Message:</label>
                    <input className='input' className = 'messageInput'type="text" name="message" />

                    {status === "SUCCESS" ? <p>Thanks!</p> : <button style={{
                        backgroundColor: 'pink',
                        color: 'white',
                        padding: '12px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        float: 'right',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        gridRowStart: 3,
                        gridRowEnd: 3,
                        gridColumnStart: 2,
                        gridColumnEnd: 3,
                        width: '25%',
                        justifySelf: 'flex-end',

                    }}>Submit</button>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
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