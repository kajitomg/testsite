import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import './Navigations.scss'

interface NavigationsProps {
	setAvailableNavigation: (number: number) => void;
	availableNavigation: number;
}

const Navigations: FC<NavigationsProps> = ({ availableNavigation, setAvailableNavigation }) => {
	const navigate = useNavigate()
	return (
		<nav className='navigations'>
			<button className={['navigation', ' content', availableNavigation === 1 ? 'available' : ''].join(' ')} onClick={() => {
				navigate('/home')
				setAvailableNavigation(1)
			}}>
				<span className='navigation__name'>Home</span>
				<div className='navigation__icon'>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
			<button className={['navigation', availableNavigation === 2 ? 'available' : ''].join(' ')} onClick={() => {
				navigate('/about')
				setAvailableNavigation(2)
			}}>
				<span className='navigation__name'>About</span>
				<div className='navigation__icon'></div>
			</button>
			<button className={['navigation', ' content', availableNavigation === 3 ? 'available' : ''].join(' ')} onClick={() => {
				navigate('/services')
				setAvailableNavigation(3)
			}}>
				<span className='navigation__name'>Services</span>
				<div className='navigation__icon'>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
			{/* <button className={['navigation', ' content', availableNavigation === 4 ? 'available' : ''].join(' ')} onClick={() => {
				setAvailableNavigation(4)
			}}>
				<span className='navigation__name'>Contact</span>
				<div className='navigation__icon'>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button> */}
		</nav>
	)
}

export default Navigations