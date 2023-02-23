import React from 'react'
import Categories from './Categories'
import Recommended from './Recommended'
import Topbar from './Topbar'
const Frame = () => {
  return (
	<div className=' flex-[0.8] flex flex-col p-8 bg-[#08072A] overflow-x-hidden'>
		<Topbar/>
		<Categories/>
		<Recommended/>
	</div>
  )
}

export default Frame