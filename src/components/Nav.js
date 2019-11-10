import React, { useState } from 'react'
import { Router, Link } from 'react-router-dom'

const Nav = props => {
  const [isOpen, toggleOpen] = useState(false)
  return (
    <nav>

      <div className='top-brackets' />
      <button onClick={() => toggleOpen(!isOpen)} dangerouslySetInnerHTML={{ __html: isOpen ? '&ndash;' : '+' }} />
      <div className='bottom-brackets' />

      {isOpen
        ? <div className='menu'>
          <ul>
            <li>
              <Link to='/development'>Development</Link>
            </li>
            <li>
              <Link to='/gallery'>Gallery</Link>
            </li>
          </ul>

        </div>
        : null}
    </nav>
  )
}

export default Nav
