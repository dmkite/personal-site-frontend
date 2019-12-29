import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import axios from 'axios'
import config from '../config'
import Admin from './Admin'

const AdminLogin = (): JSX.Element => {
  const [isLoggedIn, changeLogin] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')

  useEffect((): void => {
    const token = localStorage.getItem('log-in-token')
    !token && changeLogin(false)
    token && changeLogin(true)
  })

  const logIn = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    try {
      const response = await axios.post(`${config.serverUrl}/api/auth`, {password})
      localStorage.setItem('log-in-token', response.data.token)
      changeLogin(true)
    } catch(err) {
      console.warn(err)
    }
    
  } 
  return isLoggedIn
    ? <Admin/>
    : <form className="adminLogin" onSubmit={(e:FormEvent<HTMLFormElement>) => logIn(e)}>
    <input 
      id="password" 
      type="password"
      onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <button type="submit">log in</button>
  </form>
}

export default AdminLogin