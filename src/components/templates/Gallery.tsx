import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Gallery: React.FC = () => {

	const items = [
		{
			image: 'https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
		}
	]
	return (
		<div className='gallery'>
			<div className='tabs-container'>
				<section className='grid-layoutarea' style='padding: 80px 0px'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<ul className='work-filter'>
									<li className='filter' data-filter='all'>
										all
									</li>
									<li className='filter' data-filter='.webdesign'>
										Branding
									</li>
									<li className='filter' data-filter='.development'>
										Design
									</li>
									<li className='filter' data-filter='.javascipt'>
										javascipt
									</li>
								</ul>
								<ReactMixitup
									items={items}
									renderCells={(items) => (
										<div style={{ background: 'yellow' }}>
											{items.map(({ key, ref, style }) => (
												<div key={key} ref={ref} style={{ ...style, background: 'red' }}>
													{key}
												</div>
											))}
										</div>
									)}
								/>

								<div className='grid-layout'>
								
									<div className='single-item item2 mix development'>
										<img
											className='img-fluid'
											src='https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
											alt='portfolio image'
										/>
									</div>

									
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Gallery
