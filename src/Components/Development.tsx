import React, { Fragment } from 'react'
import { ReactComponent as Android } from '../assets/android.svg'

enum status {
  'production',
  'user testing',
  'development'
}

interface SpecType {
  [key:string]: string
}

interface DescType {
  [key: string]: string
}

interface ProjectData {
  specs: SpecType[]
  title: string
  desc: DescType[]
  svg: string
}
const Development: React.FC = () => {
  const data: ProjectData[] = [{
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
    <Fragment>
      <h1>Development</h1>
      {data.map(({ specs, svg, desc, title }, i) => (
        <section key={i}>
          <h2>{title}</h2>
          <div className="specs">
            <Android className="svg" />
            <div>
              {specs.map((s: SpecType, i: number) => {
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
            {desc.map((d: DescType, i: number) => {
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
    </Fragment>
  )
}

export default Development
