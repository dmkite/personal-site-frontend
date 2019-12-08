import React from 'react'
import { ReactComponent as Android } from '../assets/android.svg'

interface ISpecType {
  [key:string]: string
}

interface IDescType {
  [key: string]: string
}

interface IProjectData {
  specs: ISpecType[]
  title: string
  desc: IDescType[]
  svg: string
}
const Development = ():JSX.Element => {
  const data: IProjectData[] = [{
    specs: [
      { title: 'Kidogo Mobile App' },
      { framework: 'React Native' },
      { platform: 'Android' },
      { persistence: 'Dynamo DB' },
      { status: 'user testing' }
    ],
    title: 'Kidogo Mobile App',
    desc: [
      { purpose: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu sodales elit. Nulla gravida sem vel luctus faucibus. Fusce eleifend fermentum consequat.' },
      { architecture: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu sodales elit. Nulla gravida sem vel luctus faucibus. Fusce eleifend fermentum consequat.' },
      { impact: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eu sodales elit. Nulla gravida sem vel luctus faucibus. Fusce eleifend fermentum consequat.' }
    ],
    svg: ''
  }
  ]
  return (
    <div className="content">
      <h1>Development</h1>
      {data.map(({ specs, svg, desc, title }, i:number) => (
        <section key={i}>
          <h2>{title}</h2>
          <div className="specs">
            <Android className="svg" />
            <div>
              {specs.map((s: ISpecType, i: number) => {
                let elipses: string = ''
                const [key]: string[] = Object.keys(s)
                const val: string = s[key]
                while (elipses.length + key.length + val.length < 30) {
                  elipses += '.'
                }
                return <p key={i}><b>{key}</b>{elipses}{val}</p>
              })}
            </div>
          </div>
          <div>
            {desc.map((d: IDescType, i: number) => {
              const [key]: string[] = Object.keys(d)
              const val: string = d[key]
              return <div key={i}>
                <h3>{key}</h3>
                <p>{val}</p>
              </div>
            })}
          </div>
          <div>

          </div>
        </section>
      ))}
    </div>
  )
}

export default Development
