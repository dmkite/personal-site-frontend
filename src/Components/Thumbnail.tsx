import React from 'react'
import '../App.css'
import { ModalProps } from './Modal'

const Thumbnail: React.FC<ModalProps> = (props: ModalProps) => {
  const {galleryItem: {thumbnail, title}} = props

  return (
    <div className='thumbnail' 
      onClick={() => props.select(props.galleryItem)}>
      <img src={thumbnail} alt={title} />
    </div>
  )
}

export default Thumbnail
