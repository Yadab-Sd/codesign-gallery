import React from 'react'
import OwlCarousel from 'react-owl-carousel3'
import { options } from '../../assets/utils/settings'

const TopCategories: React.FC = () => {
	
	const items = [
		{
			title: 'Section',
			image:
				'https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
		}, 
		{
			title: 'Section',
			image:
				'https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
		}, 
		{
			title: 'Section',
			image:
				'https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
		}, 
		{
			title: 'Section',
			image:
				'https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
		}, 
		{
			title: 'Section',
			image:
				'https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
		}, 
		{
			title: 'Section',
			image:
				'https://images.pexels.com/photos/4041386/pexels-photo-4041386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
		}, 
	]
	
	return (
		<div className='top-categories py-4 px-6'>
			<div className='section-title mb-2'>Top categories</div>{' '}
			<div className='slider-section'>
				<section id='screenshot' className='section-padding'>
					<div className='container'>
						<div className='row'>
							{' '}
							<div className='col-md-12'>
								{' '}
								<div className='screnshot-wrappwe'>
									{' '}
									<OwlCarousel className='screenshot-slider owl-carousel owl-theme' {...options}>
										{' '}
										{items.map((item, i) => (
											<div className='single-screenshot' key={i}>
												<h4>{item.title}</h4>
												<img
													src={item.image}
													alt='screenshot'
												/>
											</div>
										))}
									</OwlCarousel>{' '}
								</div>{' '}
							</div>{' '}
						</div>{' '}
					</div>{' '}
				</section>
			</div>
		</div>
	)
}

export default TopCategories
