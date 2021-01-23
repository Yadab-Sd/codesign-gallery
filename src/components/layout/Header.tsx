import React from 'react'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const Header: React.FC = () => {
	return (
		<div className='flex flex-row justify-between items-center py-3'>
			<div className='col-span-1'>
				<img src={Logo} alt='Logo' />
			</div>
			<div className='col-auto'>
				<ul className='nav items-center'>
					<li>
						<a href='/' className='nav-link active'>
							Explore
						</a>
					</li>
					<li>
						<a href='/' className='nav-link'>
							Discover
						</a>
					</li>
					<li>
						<a href='/' className='nav-link'>
							For Professionals
						</a>
					</li>
					<li>
						<a href='/' className='nav-link dotted'>
							<FontAwesomeIcon icon={faEllipsisH} />
						</a>
					</li>
					<li>
						<a href='/' className='nav-link button'>
							Submit Photos
						</a>
					</li>
					<li>
						<a href='/' className='nav-link'>
							|
						</a>
					</li>

					<li>
						<a href='/' className='nav-link'>
							Login
						</a>
					</li>
					<li>
						<a href='/' className='nav-link button-reverse'>
							Join Free
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
