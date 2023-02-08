import React from 'react'

const SidebarItems = ({name,icon}) => {
  return (
	<>
		<div className='flex gap-4 items-center text-base py-4 '>
			{/* <span className='text-[#8878B8]'>{icon}</span> */}
			 <span className='text-white'>{icon}</span> 
			<span className='text-white'>{name}</span>		
		</div>
	</>
  )
}

export default SidebarItems