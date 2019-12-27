import React, {Fragment} from 'react'
import { Switch, Route } from 'react-router-dom'
import Gallery from '../Components/Gallery'
import Development from '../Components/Development'
import Contact from '../Components/Contact'
import Design from '../Components/Design'
import Home from './Home'

const Main:React.FC = ():JSX.Element => {
  return (
    <div className="content">
      {/* <div className='top-brackets' /> */}
      <Switch>
        <Route path='/development' component={Development} />
        <Route path ='/design' component= {Design}/>
        <Route path='/gallery' component={Gallery} />
        <Route path ='/contact' component= {Contact}/>
        <Route path='/' component={Home}/>
      </Switch>
      {/* <div className='bottom-brackets' /> */}
    </div>
  )
}

export default Main
