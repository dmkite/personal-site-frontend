<<<<<<< HEAD
import React, { Fragment } from 'react'
import { ReactComponent as Dylan } from '../assets/Dylan.svg'
import { Link } from 'react-router-dom'
=======
import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Dylan} from "../assets/Dylan.svg";
>>>>>>> ts lint

const Home = (): JSX.Element => {
  return (
    <Fragment>
<<<<<<< HEAD
      <h1 className="title-font">Dylan Kite</h1>
      <p className='intro-text'>
=======
      <h1>Dylan Kite</h1>
<Dylan className="profile-image"/>
      <p className="intro-text">
>>>>>>> ts lint
        I'm Dylan. I'm an artist and social worker turned full-stack JavaScript
				engineer, a  commanding technical background in modern web technologies
				complements meticulous communication and customer-forward thinking
				honed as a non-profit educator. It’s my mission to develop, design, and
				- above all - delight!
      </p>
<<<<<<< HEAD
      <section className="bottom-row">
        <section className='quick-links'>
          <button>
            <Link to='/development'>Development</Link>
            <div className="trapezoid" />
          </button>
          <button>
            <Link to='/design'>Graphic Design</Link>
            <div className="trapezoid" />
          </button>
          <button>
            <Link to='/gallery'>Art Gallery</Link>
            <div className="trapezoid" />
          </button>
        </section>
        <Dylan className='profile-image' />
=======
      <section className="quick-links">
        <button>
          <Link to="/development">Development</Link>
        </button>
        <button>
          <Link to="/design">Design</Link>
        </button>
        <button>
          <Link to="/gallery">Gallery</Link>
        </button>
>>>>>>> ts lint
      </section>
    </Fragment>
  );
};

export default Home;
