import React, {Fragment} from 'react'
import {ReactComponent as Android} from '../assets/android.svg'

const Development = props => {
  const data = [{
    specs: [
      {title: 'Kidogo Mobile App'},
      {framework: 'React Native'},
      {platform: 'Android'},
      {persistence: 'Dynamo DB'},
      {users: '30'}
    ],
    title: 'Kidogo Mobile App',
    desc: [
      {purpose: 'blah blah'},
      {architecture: '123'},
      {impact: 'abc'}
    ],
    svg: ''
  }
  ]
  /**
   * Data shape:
   *  specs: {
   * title
   * framwork
   * platfrom
   * persistence
   * users
   *}
    svg
    desc: [
    
    ]
    {title: content}
   */
  return (
    <Fragment>
      <h1>Development</h1>
      {data.map(({specs, svg, desc, title}, i) => (
        <section key={i}>
          <h2>{title}</h2>
          <div className="specs">
            <Android className="svg"/>
            <div>
            {specs.map((s, i) => {
              let elipses = ''
              const [key] = Object.keys(s)
              const val = s[key]
              while(elipses.length + key.length + val.length < 30){
                elipses += '.'
              }
              return <p key={i}><b>{key}</b>{elipses}{val}</p>
            })}
            </div>
          </div>
          <div>
            {desc.map((d, i) => {
              const [key] = Object.keys(d)
              const val = d[key]
              return <div>
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
