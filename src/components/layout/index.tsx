import React, { ReactElement, useEffect } from 'react'
import { useState } from 'react'
import Loader from '../templates/Loader'
import Header from './Header'

interface Layout {
	children: ReactElement | ReactElement[]
}

const Layout = ({ children }: Layout): ReactElement => {
	const [loader, setLoader] = useState(true)
	
	useEffect(() => {
		setLoader(false)
		window.scroll({
			behavior: 'smooth'
		})
	}, [])

	if(loader) return <Loader />;
	
	return (
		<div className='container mx-auto'>
			<Header />
			<main className='min-h-screen'>
				{children}
			</main>
		</div>
	)
}

export default Layout
