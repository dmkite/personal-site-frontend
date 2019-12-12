import React, { useState } from 'react'
import { ReactComponent as Android } from '../assets/android.svg'
import { ReactComponent as Windows } from '../assets/windows.svg'
import { ReactComponent as Web } from '../assets/web.svg'
import { ReactComponent as IOS } from '../assets/iOS.svg'
import {ReactComponent as Chevron} from '../assets/chevron.svg'

interface ISvgMapper {
  [key: string]: JSX.Element
  android: JSX.Element
  windows: JSX.Element
  web: JSX.Element
  iOS: JSX.Element
}

const svgMapper: ISvgMapper = {
  android: <Android className="svg" />,
  windows: <Windows className="svg" />,
  web: <Web className="svg" />,
  iOS: <IOS className="svg" />
}

export interface IKeyVal {
  [key: string]: string | number
}

interface IProjectData {
  specs: IKeyVal[]
  title: string
  desc: IKeyVal[]
  svg: string
}

const Project = (props: IProjectData): JSX.Element => {
  const [isOpen, toggleOpen] = useState(false)

  return (
    <section>
      <h2>{props.title}</h2>
      <div className="specs">
        {svgMapper[props.svg]}
        <div>
          {props.specs.map((s: IKeyVal, i: number) => {
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
      <button className="details-button" 
      onClick={() => toggleOpen(!isOpen)}>
        <Chevron style={{
          width: '10vw',
          transform: `rotate(${isOpen ? '180deg' : '0deg'})`
        }}/>
      </button>
      <div className={isOpen ? 'visible-details' : 'hidden-details'}>
        {props.desc.map((d: IKeyVal, i: number) => {
          const [key]: string[] = Object.keys(d)
          const val: string | number = d[key]
          return <div key={i}>
            <h3>{key}</h3>
            <p>{val}</p>
          </div>
        })}
      </div>
    </section>
  )
}

export default Project