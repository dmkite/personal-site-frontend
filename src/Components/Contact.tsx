import React, {useState, FormEvent, ChangeEvent, Fragment} from 'react'
import axios from 'axios'
import config from '../config'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitStatus, changeSubmitStatus] = useState({
    status: 'unsubmitted',
    text: 'submit'
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    changeSubmitStatus({status: 'submitting', text: '...'})
    axios.post(`${config.serverUrl}/api/contact`, formData)
      .then(res => {
        changeSubmitStatus({status: 'submitSuccess', text: 'success'})
        console.log(res)
      })
      .catch(err => {
        changeSubmitStatus({status: 'submitFailure', text:'failure'})
        console.warn(err)
      })

  }
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key: string = e.target.id
    const val: string = e.target.value
    setFormData({...formData, [key]: val})
  }

  return (
    <Fragment>
      <h1>Contact</h1>
      <p>Let's Chat.</p>
      <form onSubmit={(e: FormEvent) => handleSubmit(e)}>
        <label htmlFor="name">Name:</label>
        <input 
          required 
          id="name" 
          name="name" 
          type="text" 
          minLength={1} 
          maxLength={30} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        <label htmlFor="email">Email:</label>
        <input 
          required 
          id="email" 
          name="email" 
          type="email"
          minLength={7}
          maxLength={50}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
        <label htmlFor="message">Message:</label>
        <textarea 
          required 
          id="message" 
          name="message"
          minLength={10}
          maxLength={300}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleChange(e)}
          />
        <button 
          className={submitStatus.status} 
          type="submit">{submitStatus.text}</button>
      </form>
    </Fragment>
  )
}

export default Contact