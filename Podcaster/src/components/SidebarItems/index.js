import React from 'react'
import styles from "./SidebarItems.module.css"

const SidebarItems = ({name,icon,active}) => {
  return (
	<>
		<div className={`${styles.sidebar__item} flex gap-4 items-center text-base py-3 px-3 ${active ? " border-[#373552] bg-[#303146] border-[1px] rounded-full " :"" }`}>
			{/* <span className='text-[#8878B8]'>{icon}</span> */}
			 <span className={`${active ? "text-[#A965F7]" : " text-gray-400"} `}>{icon}</span> 
			<span className={`${active ? "text-white" : " text-gray-400"} ` }>{name}</span>		
		</div>
	</>
  )
}

export default SidebarItems