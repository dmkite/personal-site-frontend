import React, {Fragment} from 'react';
import './App.css'
import Nav from './Components/Nav'
import Main from './Components/Main'

const App: React.FC = () => {
  return (
    <Fragment>
      <Nav />
      <Main />
    </Fragment>
  );
}

export default App;
