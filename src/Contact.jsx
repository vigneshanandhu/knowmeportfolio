

import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

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
    <div className='container mt-5 w-50 mb-5'>
      <div className="row">
        <div className="col-12">
          <h1 className='text-center mt-3'>Contact</h1>
          <form className='mt-5' action=""  ref={form} onSubmit={sendEmail} >
            <div className="form-group mt-2">
              <label className='form-label'>Name</label>
              <input
                type="text"
                name="user_name"
                className='form-control inputbox'
                placeholder='Enter your name'
                required
              />
            </div>
            <div className="form-group mt-2">
              <label className='form-label'>Email</label>

              <input
                type="email"
                name="user_email"
                className='form-control inputbox'
                placeholder='Enter your email'
                required
              />
            </div>
            <div className="form-group mt-2">
              <label className='form-label'>Subject</label>

              <input
                type="text"
                name="subject"
                className='form-control inputbox'
                placeholder='Enter subject'
                required
              />
            </div>
            <div className="form-group mt-2">
              <label className='form-label'>Message</label>

              <textarea
                name="message"
                rows="5"
                className='form-control inputbox'
                placeholder='Enter your message'
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className='btncontact btn btn-outline-primary mt-2'

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