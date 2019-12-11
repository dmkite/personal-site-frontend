import React from 'react'
import { ReactComponent as Android } from '../assets/android.svg'
import {ReactComponent as Windows} from '../assets/windows.svg'
import { ReactComponent as Web } from '../assets/web.svg'
import {ReactComponent as IOS} from '../assets/iOS.svg'
import useAxios from 'axios-hooks'
import Loading from './Loading'
import config from '../config'

interface IKeyVal {
  [key: string]: string | number
}

interface IProjectData {
  specs: IKeyVal[]
  title: string
  desc: IKeyVal[]
  svg: string
}

interface ISvgMapper {
  [key:string]: JSX.Element
  android: JSX.Element
  windows: JSX.Element
  web: JSX.Element
  iOS: JSX.Element
}
const svgMapper: ISvgMapper = {
  android: <Android className="svg"/>,
  windows: <Windows className="svg"/>,
  web: <Web className="svg"/>,
  iOS: <IOS className="svg"/>
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
      {data.map((d: IProjectData, i: number) => {
        const { specs, svg, desc, title } = d
        return <section key={i}>
          <h2>{title}</h2>
          <div className="specs">
            {svgMapper[svg]}
            <div>
              {specs.map((s: IKeyVal, i: number) => {
                let elipses: string = ''
                const [key]: string[] = Object.keys(s)
                const val: string = String(s[key]) //typecast for numbers
                while (elipses.length + key.length + val.length < 30) {
                  elipses += '.'
                }
                return <p key={i}><b>{key}</b>{elipses}{val}</p>
              })}
            </div>
          </div>
          <div>
            {desc.map((d: IKeyVal, i: number) => {
              const [key]: string[] = Object.keys(d)
              const val: string | number = d[key]
              return <div key={i}>
                <h3>{key}</h3>
                <p>{val}</p>
              </div>
            })}
          </div>
          <div>

          </div>
        </section>
      })
      }
    </div>
  )
}

export default Development
