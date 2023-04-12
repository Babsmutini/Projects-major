import React from 'react'
import Search from './Search';
import Profile from './Profile';
import Navigation from './Navigation';
const index = () => {
  return (
	<div className='flex justify-between items-center py-1 gap-x-4'>
		<Navigation/>
		<Search/>
		<Profile/>
	</div>
  )
}

export default index