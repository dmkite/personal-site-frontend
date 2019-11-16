import React from 'react'
import '../App.css'
import { ModalProps } from './Modal'

const Thumbnail: React.FC<ModalProps> = (props: ModalProps) => {
  const {galleryItem: {width, height, clip_type, url, title}} = props
  const setClassAndClip = () => width > height
    ? `landscape ${clip_type}`
    : `portrait ${clip_type}`

  return (
    <div className='thumbnail' 
      onClick={() => props.select(props.galleryItem)}>
      <img className={setClassAndClip()} src={url} alt={title} />
    </div>
  )
}

export default Thumbnail
