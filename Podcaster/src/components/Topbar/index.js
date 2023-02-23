import React from 'react'
import Search from './Search';
import {AiOutlineSetting} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
const index = () => {
  return (
	<div className='flex justify-between py-1 '>
		<Search/>
		<div className='flex gap-4 text-[1.8em] text-white pt-2'>
			<VscAccount/>
			<AiOutlineSetting/>
		</div>
	</div>
  )
}

export default index