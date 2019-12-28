import React, { Fragment } from 'react'
import profileImage from '../assets/me.png'

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <h1>Dylan Kite</h1>
      <p>
        I'm Dylan. I'm an artist and social worker turned full-stack JavaScript
				engineer, a  commanding technical background in modern web technologies
				complements meticulous communication and customer-forward thinking
				honed as a non-profit educator. It’s my mission to develop, design, and
				- above all - delight!
      </p>
      <img className="profile-image" src={profileImage} alt="me" />

    </Fragment>
  )
}

export default Home
