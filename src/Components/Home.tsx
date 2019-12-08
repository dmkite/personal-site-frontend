import React from 'react'
import SVG from './SVG'
import * as android from '../assets/android.svg'

const Home = (): JSX.Element => {
	return (
		<div className="content">
			<SVG/>
			{/* {android} */}
			<p> 
				I'm Dylan. I'm an artist and social worker turned full-stack JavaScript
				engineer, a  commanding technical background in modern web technologies 
				complements meticulous communication and customer-forward thinking 
				honed as a non-profit educator. It’s my mission to develop, design, and
				- above all - delight!
      </p>
			
		</div>
	)
}

export default Home
