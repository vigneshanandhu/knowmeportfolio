import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    })
  }, [])

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
      className='container mt-5 mb-5'
      data-aos="fade-up"
    >
      <h1
        className='text-center mt-3'
        data-aos="zoom-in"
      >
        Contact
      </h1>

      <div className="row justify-content-center">
        <div
          className="col-12 col-md-8"
          data-aos="fade-right"
        >

          <form
            className='mt-5'
            ref={form}
            onSubmit={sendEmail}
          >

            <div
              className="form-group mt-2"
              data-aos="fade-up"
            >
              <label className='form-label'>Name</label>

              <input
                type="text"
                name="user_name"
                className='form-control'
                placeholder='Enter your name'
                required
              />
            </div>

            <div
              className="form-group mt-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <label className='form-label'>Email</label>

              <input
                type="email"
                name="user_email"
                className='form-control'
                placeholder='Enter your email'
                required
              />
            </div>

            <div
              className="form-group mt-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <label className='form-label'>Subject</label>

              <input
                type="text"
                name="subject"
                className='form-control'
                placeholder='Enter subject'
                required
              />
            </div>

            <div
              className="form-group mt-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <label className='form-label'>Message</label>

              <textarea
                name="message"
                rows="5"
                className='form-control'
                placeholder='Enter your message'
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className='btncontact btn btn-outline-primary mt-3'
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Send
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact