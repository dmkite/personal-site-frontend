import React from 'react'
import '../App.css'

const Thumbnail = props => {
  const setClassAndClip = () => props.width > props.height
    ? `landscape ${props.clip_type}`
    : `portrait ${props.clip_type}`

  return (
    <div className='thumbnail' onClick={() => props.select(props)}>
      <img className={setClassAndClip()} src={props.url} alt={props.title} />
    </div>
  )
}

export default Thumbnail
