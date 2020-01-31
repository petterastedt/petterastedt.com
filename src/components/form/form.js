import React, { useState } from 'react';

const Form = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })

  const [inputData, setInputData] = useState({
    email: null,
    subject: null,
    message: null
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    })

    if (ok) form.reset()
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    const form = e.target;

    setServerState({submitting: true})

    const postForm = await fetch('/.netlify/functions/getform', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    if (!postForm) handleServerResponse(false, `${postForm.response.data.error} `, form)
    else handleServerResponse(true, "The message was successfully sent!", form)
  }

  const checkEmail = e => {
    const passed = /\S+@\S+\.\S+/.test(e.target.value)

    setInputData({
      email: passed,
      subject: inputData.subject,
      message: inputData.message,
    })
  }

  return (
    <div className="form componentSpacing" id="contact">
      <h2>CONTACT</h2>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="email-input">Your email:</label>
        <div className="input-wrapper">
          <input
            className="box"
            type="email"
            name="email"
            required="required"
            id="email-input"
            onBlur={(e) => checkEmail(e)}/>
            <div className={`check ${inputData.email && "check--isVisible"}`}></div>
            <div className={`cross ${inputData.email === false && "cross--isVisible"}`}>+</div>
          </div>

        <label htmlFor="subject-input">Subject:</label>
        <div className="input-wrapper">
          <input
            className="box"
            type="text"
            name="subject"
            required="required"
            id="subject-input"
            onChange={(e) => {
              setInputData({
                email: inputData.email,
                subject: e.target.value,
                message: inputData.message
              })
            }} />
            <div className={`check ${inputData.subject && inputData.subject.length > 0 && "check--isVisible"}`}></div>
          </div>

        <label htmlFor="subject-input">Message:</label>
        <div className="input-wrapper input-message">
          <textarea
            className="box"
            type="textarea"
            name="message"
            required="required"
            placeholder="Hello Petter, lorem ipsum dolor..."
            id="message-input"
            onChange={(e) => {
              setInputData({
                email: inputData.email,
                subject: inputData.subject,
                message: e.target.value
              })
            }} />
            <div className={`check ${inputData.message && inputData.message.length > 0 && "check--isVisible"}`}></div>
          </div>

        <div className="buttonWrapper">
          <button
            type="submit"
            className="box"
            disabled={serverState.status || serverState.submitting ? true : false}
            >SEND</button>
          { serverState.status && <span className="response">{ serverState.status.msg }</span>}
        </div>
      </form>
    </div>
  )
}

export default Form