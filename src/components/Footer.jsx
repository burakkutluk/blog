import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

// CLASS
class Footer extends Component {

    // display
    static displayName = "Footer"

    // constructor
    constructor(props) {
        super(props);
        // STATE
        this.state = {

        }
        //BIND
    }

    // CDM

    // Function
    firstNewDate = () => {
        return "2020"
    }

    secondNewDate(){
        return ` ${new Date().getFullYear()} ` 
    }

    // RENDER
    render() {
        return (
            <React.Fragment>
                <footer className="bg-dark text-white text-center fixed-bottom44">
                    {/* Grid container */}
                    <div className="container p-4 pb-0">
                        {/* Section: Social media */}
                        <section className="mb-4">
                            {/* Facebook */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#3b5998" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-facebook-f" />
                            </a>
                            {/* Twitter */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#55acee" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-twitter" />
                            </a>
                            {/* Google */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#dd4b39" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-google" />
                            </a>
                            {/* Instagram */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#ac2bac" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            {/* Linkedin */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#0082ca" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>
                            {/* Github */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#333333" }}
                                href="#!"
                                role="button"
                            >
                                <i className="fab fa-github" />
                            </a>
                        </section>
                        {/* Section: Social media */}
                    </div>
                    {/* Grid container */}
                    {/* Copyright */}
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                    >
                        © {this.firstNewDate()} - {this.secondNewDate()} Copyright:
                        <a className="text-body" href="https://btkakademi.com.tr/">
                            Btk Akademi
                        </a>
                    </div>
                    {/* Copyright */}
                </footer>

            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER (withTransaction)
export default withTranslation()(Footer);