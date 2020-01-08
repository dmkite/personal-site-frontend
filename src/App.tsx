import React, { Fragment } from "react";
import "./App.css";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

const App: React.FC = (): JSX.Element => {
  return (
    <Fragment>
      <Nav />
      <Main />
    </Fragment>
  );
};

export default App;
