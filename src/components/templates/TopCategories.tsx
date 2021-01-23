import React from 'react'
import OwlCarousel from 'react-owl-carousel3'

const TopCategories: React.FC = () => {
	const options = {
		loop: true,
		autoplay: false,
		nav: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		dots: false,
		margin: 20,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		responsive: { 0: { items: 2 }, 786: { items: 4 }, 1200: { items: 4 } }
	}

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
		<div className='top-categories py-4 px-5'>
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
