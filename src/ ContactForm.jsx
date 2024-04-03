import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm(){
    const initialFormData = {
        name: '',
        email:'',
        message:'',
    }
    const [emailSent, setEmailSent] = useState(false);
    const [formData, setFormData] = useState(initialFormData);

    // console.log("Form data", formData)

    async function handleSubmit(evt){
        evt.preventDefault();
        if(formData.name && formData.email && formData.message){
            try{
                await emailjs.sendForm('service_sj57s9s', 'template_bwrb4w9', evt.target,{
                    publicKey:'ajR8umfZjptjcsNpR'
                });
                setFormData(initialFormData);
                setEmailSent(true);

                setTimeout(() => {
                    setEmailSent(false);
                }, 5000)
            }catch(error){
                console.error("Error sending email:", error)
            }
        }else{
            alert("Please fill in all fields.");
        }

    }

    /** Update form input */
    function handleChange(evt){
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }))
    }

    return(
        <div className="card card-body">
            <form onSubmit={handleSubmit}>
                <div >
                    <label className="col-form-label col-form-label-sm mt-2" htmlFor="name">Name</label>
                    <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="Name"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}>
                    </input>
                </div>
                <div>
                    <label className="col-form-label col-form-label-sm mt-2" htmlFor="email">Email</label>
                    <input
                        className="form-control form-control-sm"
                        type="text"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}>
                    </input>
                </div>
                <div>
                    <label htmlFor="message" className="col-form-label col-form-label-sm mt-2">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}>
                    </textarea>
                </div>
                <button className="btn btn-info">Send Message</button>
            </form>
            {emailSent && <div className="alert alert-success mt-3">Message Sent!</div>}
        </div>
    )
}
export default ContactForm;