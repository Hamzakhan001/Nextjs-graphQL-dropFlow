import React from 'react';
import Image from 'next/image';

type Props = {}

const Footer = (props: Props) => {
  return (
	<footer className='flexStart footer'>
		<div className='flex flex-col gap-12 w-full'>
			<div className='flex items-start flex-col'>
				<Image 
				src="/logo-purple.svg"
				width = {115}
				height = {38}
				alt = "Flexible"
				/>
				<p className='text-start text-sm font-normal mt-5 max-w-xs'>
					World's larget community for creatives
				</p>
			</div>
			<div className=''>
				
			</div>
		</div>
	</footer>
  )
}

export default Footer