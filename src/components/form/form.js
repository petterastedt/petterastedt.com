import React, { useState } from 'react';

const Form = ({data}) => {
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
  }

  const urlencodeFormData = (fd) => {
    let params = new URLSearchParams()
    for (var pair of fd.entries()) {
        typeof pair[1]=='string' && params.append(pair[0], pair[1])
    }
    return params.toString()
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    const form = new FormData(e.target)

    const formUrlEncode = urlencodeFormData(form)

    setServerState({submitting: true})

    const postForm = await fetch('/.netlify/functions/getform', {
      method: 'POST',
      body: formUrlEncode
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
      <div className="form-title"
        dangerouslySetInnerHTML={{ __html: data.formTitle }}>
      </div>
      <form onSubmit={handleOnSubmit} aria-label="Contact form">
        <label htmlFor="email-input">{data.email}</label>
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

        <label htmlFor="subject-input">{data.subject}</label>
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

        <label htmlFor="subject-input">{data.message}</label>
        <div className="input-wrapper input-message">
          <textarea
            className="box"
            type="textarea"
            name="message"
            required="required"
            placeholder={data.placeholder}
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
            >{data.buttonLabel}</button>
          { serverState.status && <span className="response">{ serverState.status.msg }</span>}
        </div>
      </form>
    </div>
  )
}

export default Form