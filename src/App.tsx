import React, { Fragment } from 'react';
import './App.css'
import Nav from './Components/Nav'
import Main from './Components/Main'

const App:React.FC = (): JSX.Element => {
  return (
    <Fragment>
      {/* <div className='top-brackets' /> */}
      <Nav />
      {/* <div className='bottom-brackets' /> */}
      {/* <div className='top-brackets' /> */}
      <Main />
      {/* <div className='bottom-brackets' /> */}
    </Fragment>
  );
}

export default App;
