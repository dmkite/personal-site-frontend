import React, { Fragment } from 'react'
import {ReactComponent as Dylan} from '../assets/Dylan.svg'
import {Link} from'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <h1>Dylan Kite</h1>
<Dylan className='profile-image'/>      
      <p className='intro-text'>
        I'm Dylan. I'm an artist and social worker turned full-stack JavaScript
				engineer, a  commanding technical background in modern web technologies
				complements meticulous communication and customer-forward thinking
				honed as a non-profit educator. It’s my mission to develop, design, and
				- above all - delight!
      </p>
      <section className='quick-links'>
        <button>
          <Link to='/development'>Development</Link>
        </button>
        <button>
          <Link to='/design'>Design</Link>
        </button>
        <button>
          <Link to='/gallery'>Gallery</Link>
        </button>
      </section>
    </Fragment>
  )
}

export default Home
