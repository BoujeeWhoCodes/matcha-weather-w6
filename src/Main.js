

import React from 'react';
import Weather from './Weather';
import './Main.css';

export default function Main() {
	return (
		<div className='container'>
			<Weather defaultCity='Bodrum' />
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
				<a href='https://weather-week6-react-final.netlify.app/'>Netlify</a>
			</div>
		</div>
	);
}
