import React from 'react'
import * as android from '../assets/android.svg'
import * as iOS from '../assets/iOS.svg'
import * as web from '../assets/web.svg'

const SVG = ({
  style = {},
  fill = '#fff',
  width = '100%',
  className = '',
  height = '100%',
  viewBox = '0 0 32 32',
}) => 
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
      <path d="some path here" fill={fill} />
  </svg>


const Image = props => {
  switch(props.name) {
    case "android":
      return <SVG {...props} />;
    case "iOS":
      return <SVG {...props} />;
    default:
      return <div />;
  }
}

  export default Image