import React, {useState, useEffect} from 'react'

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
  }, [dots])

  return (
      <div className="loading">
        {dots}
      </div>
  )
  
}

export default Loading