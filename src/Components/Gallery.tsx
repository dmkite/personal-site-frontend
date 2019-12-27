import React, { useState, Fragment } from 'react'
import Thumbnail from './Thumbnail'
import Modal from './Modal'
import useAxios from 'axios-hooks'
import config from '../config'
import Loading from '../Components/Loading'

export interface IGalleryItem {
  id: string
  title: string
  desc: string
  height: number
  width: number
  image: string
  thumbnail: string
}

const Gallery = (): JSX.Element => {
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


  if (loading) return (<Fragment>
    {staticContent}
    <Loading />
  </Fragment>)

  if (error) return <p>{JSON.stringify(error)}</p>

  const transformedData: IGalleryItem[] = Object.keys(data)
    .reduce((acc: IGalleryItem[], id: string): IGalleryItem[] => {
      acc.push(data[id])
      return acc
    }, [])

  return (
    <Fragment>
      {staticContent}
      <div className='gallery'>
        {transformedData.map((d: IGalleryItem, i: number): JSX.Element => {
          return <Thumbnail key={i} galleryItem={d} select={select} />
        }
        )}
      </div>

      {selected && <Modal galleryItem={selected} select={select} />}
    </Fragment>
  )
}

export default Gallery
