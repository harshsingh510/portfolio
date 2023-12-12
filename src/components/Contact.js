import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
// import {useState} from "react";
// {/* <link rel="stylesheet" href="../src/components/mailing.html"></link> */}
import { motion } from "framer-motion";

const Contact = () => {
    const fade = {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5
        }
    }

    // function showModal(message) {
    //     var myModal = document.getElementById("myModal");
    //     var modalMessage = document.getElementById("modalMessage");



    //     // Set the message in the modal
    //     modalMessage.textContent = message;

    //     // Show the modal
    //     myModal.style.display = "block";

    //     // Add event listener to close the modal when the close button is clicked
    //     var closeButton = document.getElementsByClassName("close")[0];
    //     closeButton.addEventListener("click", function() {
    //       myModal.style.display = "none";
    //     });
    //   }

    //   // Add event listener to the form submission
    //   document.getElementById("myForm").addEventListener("submit", function(event) {
    //     event.preventDefault(); // Prevent the default form submission

    //     // Show the modal immediately to indicate form submission is in progress
    //     showModal("Submitting form...");

    //     // Perform an AJAX request to submit the form
    //     var xhr = new XMLHttpRequest();
    //     xhr.open("POST", this.action);
    //     xhr.onreadystatechange = function() {
    //       if (xhr.readyState === XMLHttpRequest.DONE) {
    //         if (xhr.status === 200) {
    //           // Successful response
    //           var response = xhr.responseText;
    //           showModal(response); // Show the modal with the response message
    //           document.getElementById("myForm").reset(); //Clear the form fields
    //         } else {
    //           // Error response
    //           showModal("Error: Something went wrong."); // Show a generic error message
    //         }
    //       }
    //     };
    //     xhr.send(new FormData(this));
    //   });



    return (
        <>
            <div className="contact" id='contact'>
                <div className="container">
                    <motion.div className="heading" initial={{ opacity: 0 }} whileInView={fade} viewport={{ once: true }}>
                        <p className="heading-sub-text">Hire Me</p>
                        <p className='heading-text'>Get in Touch</p>
                    </motion.div>
                    <div className="contact-box">
                        <motion.div className="left-box" initial={{ opacity: 0, y: '-50px' }} whileInView={verticalLeft}>
                            <div className="contact-heading">
                                <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form</p>
                            </div>
                            <div className="contact-hello">
                                <p>Say Hello</p>
                                <Link className='hello-links' to="//wa.me/+919519441753" target='_blank'>wa.me/Harsh_Singh</Link>
                                <Link className='hello-links' to="//mailto:harsh510official@gmail.com" target='_blank'>harsh510official@gmail.com</Link>
                            </div>
                        </motion.div>
                        <motion.div className="right-box" initial={{ opacity: 0, y: '50px' }} whileInView={verticalLeft}>

                            <form
                                id="myForm"
                                name="contact-form"
                                action="https://script.google.com/macros/s/AKfycbwSxMicyStyubSYtdFkwVPFOa7xY1i2g4-aB91AZt4mO2uxqn648IcAyRKdaM1el-NqNQ/exec"
                                method="POST"
                            >
                                <input type="hidden" name="form-name" value="contact-form" />
                                <div className="form-top">
                                    <div className="name">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            type="text"
                                            name="FirstName"
                                            id="name"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div className="email">
                                        <label htmlFor="email">Your Email</label>
                                        <input
                                            type="email"
                                            name="Email"
                                            id="email"
                                            placeholder="Enter your email address"

                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-mid">
                                    <div className="message">
                                        <label htmlFor="message">Your message</label>
                                        <textarea
                                            type="text"
                                            name="Message"
                                            id="message"
                                            placeholder="Hi, I think I need you to work on this particular product. Reach out as soon as you can"
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="form-btn">
                                    <button type="submit" className="hero-contact">
                                        Send Message
                                    </button>
                                </div>

                            </form>
                        </motion.div>

                    </div>
                </div>
            </div>
            {/* <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p id="modalMessage"></p>
                </div>
            </div> */}
        </>
    );
};

export default Contact;
