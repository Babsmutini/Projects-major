import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router';



const Frame = () => {
  return (
	<div className='flex flex-col p-8 bg-[#F9F9F9] w-full  overflow-x-hidden '>
		<Topbar/>
		<div className='mt-12'>
		<Outlet/>
		</div>
	</div>
  )
}

export default Frame