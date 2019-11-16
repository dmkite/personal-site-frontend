import React, { useState, useEffect, Fragment } from 'react'
import Thumbnail from './Thumbnail'
import Modal from './Modal'
import useAxios from 'axios-hooks'


enum Clip_type {
  'top',
  'center',
  'bottom',
  'left',
  'right'
}

export interface GalleryItem {
  title: string
  description: string
  height: number
  width: number
  url: string
  clip_type: Clip_type
}

const Gallery: React.FC = () => {
  const [selected, select] = useState<GalleryItem | null>(null)
  const [{ 
    data, 
    loading, 
    error 
  }, refectch] = useAxios('https://dylankite.com/gallery')

  if (loading) return <div className='loading-spinner' />
  if (error) return <p>{JSON.stringify(error)}</p>
  return (
    <>
      <h1>gallery</h1>
      <div className='gallery'>
        {data.map((d: GalleryItem, i: number) => {
          return <Thumbnail key={i} galleryItem={d} select={select} />}
        )}
      </div>

      {selected && <Modal galleryItem={selected} select={select} />}
    </>
  )
}

export default Gallery
