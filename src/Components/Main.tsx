import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Gallery from '../Components/Gallery'
import Development from '../Components/Development'
import Contact from '../Components/Contact'

const Main = () => {
  return (
    <main>
      <div className='top-brackets' />
      <Switch>
        <Route path='/development' component={Development} />
        <Route path='/gallery' component={Gallery} />
        <Route path ='/contact' component= {Contact}/>
        <Route path='/'>
          <h1>Dylan Kite</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel elit nibh. Maecenas pulvinar neque quis posuere tincidunt. Aenean ac viverra diam. Vestibulum facilisis volutpat vehicula.</p>

        </Route>
      </Switch>
      <div className='bottom-brackets' />
    </main>
  )
}

export default Main
