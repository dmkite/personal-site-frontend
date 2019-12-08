import React from 'react'
import {IGalleryItem} from './Gallery'

export interface IModalProps{
  galleryItem: IGalleryItem
  select(arg: null | IGalleryItem): void
}

const Modal = (props: IModalProps):JSX.Element => {
  const {galleryItem : {image, title, width, height, description}} = props
  return (
    <div className='modal'>
      <button onClick={() => props.select(null)}>x</button>
      <div className='modal-content'>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{width}x{height}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Modal
