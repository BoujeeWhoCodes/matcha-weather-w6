

import React from 'react';
import Weather from './Weather';
import './Main.css';

export default function Main() {
	return (
		<div className='container'>
			<Weather defaultCity='London' />
			<div className='footer-container'>
				Project coded by{' '}
				<a
					href='https://www.shecodes.io/graduates/98826-elvira-lettis'
					target='_blank'
					rel='noreferrer'
				>
					Bougie WhoCodes
				</a>
				, is{' '}
				<a
					href='https://github.com/BoujeeWhoCodes/matcha-weather-w6'
					target='_blank'
					rel='noreferrer'
				>
					open-sourced
				</a>{' '}
				and hosted on{' '}
				<a href='https://weather-app-react-zeta-flame.vercel.app/'>Netlify</a>
			</div>
		</div>
	);
}
