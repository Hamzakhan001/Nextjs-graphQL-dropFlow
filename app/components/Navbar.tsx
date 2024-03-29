import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { NavLinks } from '@/constants';
import { link } from 'fs';
import AuthProviders from './AuthProviders';

const Navbar = () => {
	const session = {};
  return (
    <nav className='flexBetween nvabar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image 
		  src='/logo.svg' 
		  width = {115} 
		  height = {43}
		  alt = "Flexible" />
        </Link>
		<ul className='xl:flex hidden text-small gap-7'>
			{ NavLinks.map((elem)=> (
				<Link href={ elem.href } key={elem.key}>
					{elem.text}
				</Link>
			))
			}
		</ul>
      </div>

	  <div className='flexCenter gap-4'>
		{session ? 
		(
		  <>
		  UserPhoto
		  <Link href="/create-project">
		  Share your work
		  </Link>
		  
		  </>
		): (
			<AuthProviders />
		)
		}
	  </div>
    </nav>
  )
}

export default Navbar