import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Gallery from '../Components/Gallery'
import Development from '../Components/Development'

const Main = () => {
  return (
    <main>
      <div className='top-brackets' />
      <Switch>
        <Route path='/development' component={Development} />
        <Route path='/gallery' component={Gallery} />>
        <Route path='/'>
          <h1>Home</h1>
        </Route>
      </Switch>
      <div className='bottom-brackets' />
    </main>
  )
}

export default Main
