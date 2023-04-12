import React from 'react'
import {HiDotsHorizontal} from 'react-icons/hi'

const Episode = ({date, title, description, duration}) => {
  return (
	<div className='p-8 my-4 rounded-[30px] border-[#03041a] border-[1px] text-white flex bg-[#18172C] items-center'>
		<div className='flex flex-col gap-1 flex-[0.7] text-gray-400'>
			<p>{date }</p>
			<p className='text-[1.3em] text-white'>{title}</p>
			<p>{description}</p>
		</div>
		<div className='flex-[0.2] text-center'>
			{duration + " min"}
		</div>
		<div className='flex-[0.1]'>
			<HiDotsHorizontal/>
		</div>
	</div>
  )
}

export default Episode