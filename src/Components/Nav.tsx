import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'

const Nav = (props: any) => {
  const [isOpen, toggleOpen] = useState<boolean | null>(null)
  const setSelectStatus = (path: string) => props.location.pathname === path
    ? 'selected'
    : ''


  const applyAnimation = () => {
    if (isOpen === null) {
      return 'menu closed'
    } else if (isOpen) {
      return 'menu open'
    } else {
      return 'menu closed'
    }
  }

  return (
    <nav>
      <div className='top-brackets' />
      <button 
        onClick={() => toggleOpen(!isOpen)} 
        dangerouslySetInnerHTML={{ __html: isOpen ? '&ndash;' : '+' }}
         />
      <div className='bottom-brackets' />
      <div className={applyAnimation()}>
        <ul>
          <li className={setSelectStatus('/')}>
            <Link to='/'>Home</Link>
          </li>
          <li className={setSelectStatus('/development')}>
            <Link to='/development'>Development</Link>
          </li>
          <li className={setSelectStatus('/gallery')}>
            <Link to='/gallery'>Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Nav)
