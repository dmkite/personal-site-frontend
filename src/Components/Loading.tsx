import React, {useState, useEffect, Fragment} from 'react'

const Loading:React.FC = ():JSX.Element => {
  const [dots, addDots] = useState<string>('')
  useEffect(():void => {
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