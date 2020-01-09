import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Dylan} from "../assets/Dylan.svg";

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <h1 className="title-font">Dylan Kite</h1>
      <p className="intro-text">
        I'm Dylan. I'm an artist and social worker turned full-stack JavaScript
				engineer. A commanding technical background in modern web technologies
				complements meticulous communication and customer-forward thinking
				honed as a non-profit educator. It’s my mission to develop, design, and
				- above all - delight!
      </p>
      <section className="bottom-row">
        <section className="quick-links">
            <Link to="/development">Development</Link>
            <Link to="/design">Graphic Design</Link>
            <Link to="/gallery">Art Gallery</Link>
        </section>
        <Dylan className="profile-image" />
      </section>
    </Fragment>
  );
};

export default Home;
