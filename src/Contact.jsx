import ContactForm from "./ ContactForm";

/**Contact page for site */

function Contact(){

        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="text-center">
                <h2 className="text-info mb-3">Let's connect!</h2>
                            <div className="d-flex flex-row align-items-center flex-sm-row flex-md-column flex-lg-column justify-content-center">
                                <h1 className="text-secondary mb-3 ml-2 mr-2"><a href="https://www.linkedin.com/in/brandielucano/" target="_blank"><i className="bi bi-linkedin icon-lg"></i></a></h1>
                                <h1 className="text-secondary mb-3 ml-2 mr-2"><a href="https://github.com/BMLucano" target="_blank"><i className="bi bi-github icon-lg"></i></a></h1>
                                <h1 className="text-secondary mb-3 ml-2 mr-2"><a href="https://twitter.com/BLuc93" target="_blank"><i className="bi bi-twitter-x icon-lg"></i></a></h1>
                                <h1 className="text-secondary mb-3 ml-2 mr-2"><a href="mailto:blucano.dev@gmail.com" target="_blank"><i className="bi bi-envelope icon-lg"></i></a></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        );

    // )
}

export default Contact;