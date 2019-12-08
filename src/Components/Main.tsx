import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Gallery from '../Components/Gallery'
import Development from '../Components/Development'
import Contact from '../Components/Contact'
import Home from './Home'

const Main:React.FC = ():JSX.Element => {
  return (
    <main>
      <div className='top-brackets' />
      <Switch>
        <Route path='/development' component={Development} />
        <Route path='/gallery' component={Gallery} />
        <Route path ='/contact' component= {Contact}/>
        <Route path='/' component={Home}/>
      </Switch>
      <div className='bottom-brackets' />
    </main>
  )
}

export default Main
