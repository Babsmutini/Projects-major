import React from 'react'
import styles from "./SidebarItems.module.css"

const SidebarItems = ({name,icon,active}) => {
  return (
	<>
		<div className={`${styles.sidebar__item} flex gap-4 items-center text-base py-2 px-2 ${active ? "  bg-[#FFF] border-[1px] rounded-md " :"" }`}>
			{/* <span className='text-[#8878B8]'>{icon}</span> */}
			 <span className={`${active ? "text-[#EE732F] " : " text-black"} `}>{icon}</span> 
			<span className={`${active ? "text-[#EE732F]" : " text-black"} ` }>{name}</span>		
		</div>
	</>
  )
}

export default SidebarItems