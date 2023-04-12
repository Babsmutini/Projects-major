import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const Profile = () => {
  return (
	<>
		<div className="flex items-center gap-2">
			<span>Julia</span>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEGFNlVVc1EAue9bBAdZjeU1fd9yJsQAtUA&usqp=CAU" className="w-8 rounded-full object-cover" alt="profile_image" />
			<span className="w-8">

			<BsChevronDown color={"black"}/>
			</span>
		</div>
	</>
  )
}

export default Profile