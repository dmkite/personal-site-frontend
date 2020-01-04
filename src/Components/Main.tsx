import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "../Components/Contact";
import Design from "../Components/Design";
import Development from "../Components/Development";
import Gallery from "../Components/Gallery";
import Admin from "./AdminLogin";
import Home from "./Home";

const Main: React.FC = (): JSX.Element => {
  return (
    <div className="content">
      {/* <div className='top-brackets' /> */}
      <Switch>
        <Route path="/development" component={Development} />
        <Route path="/design" component= {Design}/>
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component= {Contact}/>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Home}/>
      </Switch>
      {/* <div className='bottom-brackets' /> */}
    </div>
  );
};

export default Main;
