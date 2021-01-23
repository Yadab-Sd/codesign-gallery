import { MDBRow } from 'mdbreact'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Gallery: React.FC = () => {
	let brakePoints = [350, 500, 750]
	let images = []
	const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643]
	for (let i = 0; i < imgId.length; i++) {
		const ih = 200 + Math.floor(Math.random() * 10) * 15
		images.push('https://unsplash.it/250/' + ih + '?image=' + imgId[i])
	}

	return (
		<div className='gallery py-4 px-5'>
			<div className='tabs-container'>
				<section className='grid-layoutarea'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<Tabs>
									<TabList className='work-filter text-left mb-2'>
										<Tab className='filter active' data-filter='all'>
											all
										</Tab>
										<Tab className='filter' data-filter='.webdesign'>
											Branding
										</Tab>
										<Tab className='filter' data-filter='.development'>
											Design
										</Tab>
										<Tab className='filter' data-filter='.javascipt'>
											javascipt
										</Tab>
									</TabList>

									<TabPanel>
										<MDBRow className='masonry-with-flex'>
											<div>
												{images.map((img, i) => (
													<div key={i}>
														<img className='img-fluid' src={img} alt='portfolio image' />
													</div>
												))}
											</div>
											<div>
												{images.map((img, i) => (
													<div key={i}>
														<img className='img-fluid' src={img} alt='portfolio image' />
													</div>
												))}
											</div>
											<div>
												{images.map((img, i) => (
													<div key={i}>
														<img className='img-fluid' src={img} alt='portfolio image' />
													</div>
												))}
											</div>
										</MDBRow>
									</TabPanel>
									<TabPanel className='grid-layout'>
										<div className='single-item item2 mix development'>
											<img
												className='img-fluid'
												src='https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
												alt='portfolio image'
											/>
										</div>
										<div className='single-item mix webdesign item1'>
											<img
												className='img-fluid'
												src='https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
												alt='portfolio image'
											/>
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

const Tile = ({ src }) => {
	return (
		<div className='tile'>
			<img src={src} />
		</div>
	)
}

export default Gallery
