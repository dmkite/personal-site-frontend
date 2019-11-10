import React, { useState, useEffect, Fragment } from 'react'
import Thumbnail from './Thumbnail'
import Modal from './Modal'
import useAxios from 'axios-hooks'

const Gallery = props => {
  const [selected, select] = useState(null)
  const [{ data, loading, error }, refectch] = useAxios('https://dylankite.com/gallery')

  if (loading) return <div className='loading-spinner' />
  if (error) return <p>{JSON.stringify(error)}</p>
  return (
    <>
      <h1>gallery</h1>
      <div className='gallery'>
        {data.map((d, i) => <Thumbnail key={i} {...d} select={select} />)}
      </div>

      {selected && <Modal {...selected} />}
    </>
  )
}

export default Gallery
