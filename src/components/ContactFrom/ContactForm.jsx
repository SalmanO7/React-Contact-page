import React, { useState } from 'react'
import Button from '../Button/Button.jsx'
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import contactImg from './contactImg.png'
import './ContactForm.css'

function ContactFrom() {
  const [name, setName] = useState("Salman")
  const [email, setEmail] = useState("salman221020@gmail.com")
  const [text, setText] = useState("This Is Contact Us")

  console.log(name, email, text)
  const onViaCallSubmit = () => {
    console.log("Via Call")
  }
  const onSubmit = (e) => {
    e.preventDefault();

    setName(e.target[0].value)
    setEmail(e.target[1].value)
    setText(e.target[2].value)
  }

  return (
    <>
      <section className='section'
        style={{ display: "flex" }}
      >
        <div className="section-form">
          <div className='btns btn-section'>
            <Button text="VIA SUPPORT CHAT"

              icon={<MdOutlineMessage fontSize="19px" />}
            />
            <Button text="VIA CALL"
              onClick={onViaCallSubmit}
              icon={<MdOutlineLocalPhone fontSize="19px" />}
            />
          </div>
          <button className='email-btn'>
            <MdOutlineEmail fontSize="19px" />
            VIA EMAIL
          </button>
          <form onSubmit={onSubmit} >
            <div className='contact-form'>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' />
            </div>
            <div className='contact-form'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' />
            </div>
            <div className='contact-form'>
              <label htmlFor="text"><span>Text</span></label>
              <textarea rows="7" style={{ height: "100px" }} name='text' id='text' />
            </div>
            <div style={{
              marginTop: "15px",
              justifyContent: "end",
              marginLeft: "200px",
              fontFamily: "sans-serif",
              width: "180px"
            }}
            >
              <Button text="SUBMIT BUTTON" />
            </div>

          </form>
        </div>
        <div className='section-Img'>
          <img src={contactImg} alt="Contact Img" />
        </div>
      {/* <div className='reasult'>{name + " " + email + " " + text}</div> */}
      </section>

    </>
  )
}

export default ContactFrom