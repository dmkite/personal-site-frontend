import React from 'react'
import useAxios from 'axios-hooks'
import Loading from './Loading'
import config from '../config'
import Project, {IKeyVal} from './Project'

interface IProjectData {
  specs: IKeyVal[]
  title: string
  desc: IKeyVal[]
  svg: string
}

const Development = (): JSX.Element => {
  const [{
    data,
    loading,
    error
  }, refectch] = useAxios(`${config.serverUrl}/api/projects`)
  if (loading) {
    return <Loading />
  }
  if (error) {
    console.log(error)
    return <div>:[ something went wrong.</div>
  }
  return (
    <div className="content">
      <h1>Development</h1>
      {data.map((d: IProjectData, i: number) => <Project key={i} {...d}/>)}
    </div>
  )
}

export default Development
