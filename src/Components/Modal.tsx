import React from 'react'
import {GalleryItem} from './Gallery'

export interface ModalProps{
  galleryItem: GalleryItem
  select(arg: null | GalleryItem): void
}

const Modal = (props: ModalProps) => {
  const {galleryItem : {url, title, width, height, description}} = props
  return (
    <div className='modal'>
      <button onClick={() => props.select(null)}>x</button>
      <div className='modal-content'>
        <img src={url} alt={title} />
        <h2>{title}</h2>
        <h3>{width}x{height}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Modal
