import React, {Fragment} from 'react'
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
    <Fragment>
      <h1>Development</h1>
      {data.map((d: IProjectData, i: number) => <Project key={i} {...d}/>)}
    </Fragment>
  )
}

export default Development
