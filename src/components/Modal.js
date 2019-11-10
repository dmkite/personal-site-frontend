import React from 'react'

const Modal = props => {
  return (
    <div className='modal'>
      <button onClick={() => props.select(null)}>x</button>
      <div className='modal-content'>
        <img src={props.url} alt={props.title} />
        <h2>{props.title}</h2>
        <h3>{props.width}x{props.height}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Modal
