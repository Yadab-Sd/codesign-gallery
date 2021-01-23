import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/templates/Banner'
import Gallery from '../components/templates/Gallery'
import TopCategories from '../components/templates/TopCategories'

interface Props {}

const Home: React.FC = (props: Props) => {
	return (
		<Layout>
			<Banner />
			<div className='home-contents min-h-screen'>
				<p className='white-txt text-right'>
					Photo of the Day{' '}
					<span className='grey-txt'>by</span>{' '}
					John Doe
				</p>
				<TopCategories />
				<Gallery />
			</div>
		</Layout>
	)
}

export default Home
