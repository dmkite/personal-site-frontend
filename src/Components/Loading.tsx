import React, {useState, useEffect, Fragment} from 'react'

const Loading = () => {
  const [dots, addDots] = useState('')
  useEffect(() => {
    if(dots.length === 4) {
      setTimeout(() => {
        addDots('')
      }, 1000)
    }
    else {
      setTimeout(() => {
         addDots(dots + '.')
      }, 500)
    }
  }, [])

  return (
    <Fragment>
      <div className="loading">
        {dots}
      </div>
      <div className="blur"/>
    </Fragment>

  )
  
}

export default Loading