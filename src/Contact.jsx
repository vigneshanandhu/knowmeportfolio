import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jzprewi',
      'template_qysda4s',
      form.current,
      '_NkQvccgSmYMvI4fW'
    )
    .then((result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
        form.current.reset();
    })
    .catch((error) => {
        console.log(error.text);
        alert("Failed to send message");
    });
  };

  return (
    <div 
      className='formdiv my-5'
      data-aos='zoom-in'
    >

      {/* Contact Form */}
      <form 
        ref={form} 
        onSubmit={sendEmail} 
        className='contact-form'
      >

        <h1 
          className='formsg text-center mt-5'
          data-aos='fade-down'
        >
          Contact Us
        </h1>

        {/* Name */}
        <div 
          className='mb-3'
          data-aos='fade-right'
        >
          <label className='form-label'>Name</label>

          <input
            type="text"
            name="user_name"
            className='form-control inputbox'
            placeholder='Enter your name'
            required
          />
        </div>

        {/* Email */}
        <div 
          className='mb-3'
          data-aos='fade-left'
        >
          <label className='form-label'>Email</label>

          <input
            type="email"
            name="user_email"
            className='form-control inputbox'
            placeholder='Enter your email'
            required
          />
        </div>

        {/* Subject */}
        <div 
          className='mb-3'
          data-aos='fade-right'
        >
          <label className='form-label'>Subject</label>

          <input
            type="text"
            name="subject"
            className='form-control inputbox'
            placeholder='Enter subject'
            required
          />
        </div>

        {/* Message */}
        <div 
          className='mb-3'
          data-aos='fade-left'
        >
          <label className='form-label'>Message</label>

          <textarea
            name="message"
            rows="5"
            className='form-control inputbox'
            placeholder='Enter your message'
            required
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className='btncontact btn btn-outline-primary mt-2'
          data-aos='zoom-in-up'
        >
          Send
        </button>

      </form>

    </div>
  )
}

export default Contact