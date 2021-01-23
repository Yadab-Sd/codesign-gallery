import { faLandmark, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Banner: React.FC = () => {
	return (
		<div className='banner flex flex-col items-center justify-center'>
			<div className='banner-inner'>
				<h1 className='banner-title'>
					Your local source of high quality images
					<br /> and videos directly from their creators
				</h1>
				<div className='search-bar flex flex-row justify-between items-center'>
					<input type='text' placeholder='Search photos and videos' className='mb-2'/>
					<button>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
				<p>
					<label className='white-txt'>Recommended:</label>{" "}
					<span className='grey-txt'>summer, food, covid-19, real estate, love</span>
				</p>
			</div>
		</div>
	)
}

export default Banner
