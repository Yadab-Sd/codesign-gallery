import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Gallery: React.FC = () => {
	let images: string[] = []
	const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643]
	const tabs = ['All', 'Photos', 'Videos']
	const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 }

	for (let i = 0; i < imgId.length; i++) {
		const ih = 200 + Math.floor(Math.random() * 10) * 15
		images.push('https://unsplash.it/250/' + ih + '?image=' + imgId[i])
	}

	return (
		<div className='gallery py-4 px-6'>
			<div className='tabs-container'>
				<section className='grid-layoutarea'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<Tabs>
									<TabList className='work-filter text-left mb-2'>
										{tabs.map((tab, index) => (
											<Tab className={`${index === 0 ? 'active ' : ''}filter`} key={index}>
												{tab}
											</Tab>
										))}
									</TabList>
									{tabs.map((tab, index) => (
										<TabPanel key={index}>
											<ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
												<Masonry columnsCount={3} gutter={4}>
													{images.map((img, i) => (
														<div key={i}>
															<img className='img-fluid' src={img} alt={tab} width='100%' />
														</div>
													))}
												</Masonry>
											</ResponsiveMasonry>
										</TabPanel>
									))}
								</Tabs>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Gallery
