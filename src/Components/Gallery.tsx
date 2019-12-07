import React, { useState, useEffect, Fragment } from 'react'
import Thumbnail from './Thumbnail'
import Modal from './Modal'
import useAxios from 'axios-hooks'
import config from '../config'
import Loading from '../Components/Loading'

export interface IGalleryItem {
  title: string
  description: string
  height: number
  width: number
  image: string
  thumbnail: string
}

const Gallery = ():JSX.Element => {
  const [selected, select] = useState<IGalleryItem | null>(null)
  const [{ 
    data, 
    loading, 
    error 
  }, refectch] = useAxios(`${config.serverUrl}/api/gallery`)

  const staticContent = <Fragment>
    <h1>Gallery</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel elit nibh. Maecenas pulvinar neque quis posuere tincidunt. Aenean ac viverra diam. Vestibulum facilisis volutpat vehicula.</p>
  </Fragment>

  if (loading) return (<div className="content">
    {staticContent}
    <Loading/>
    </div>)
  if (error) return <p>{JSON.stringify(error)}</p>
  return (
    <div className="content">
      {staticContent}
      <div className='gallery'>
        {data.map((d: IGalleryItem, i: number) => {
          return <Thumbnail key={i} galleryItem={d} select={select} />
        }
        )}
      </div>

      {selected && <Modal galleryItem={selected} select={select} />}
    </div>
  )
}

export default Gallery
