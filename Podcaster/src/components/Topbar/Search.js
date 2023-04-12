import React from 'react'
import {SlMagnifier} from 'react-icons/sl'
const Search = () => {
  return (
	<div className='flex items-center relative w-full'>
		<input type="text" placeholder='Search' className='absolute border bg-[#ffff] rounded-full pl-12 text-white p-2 w-full'/>
		<SlMagnifier className=" absolute left-4 text-[#898A9F] text-[1.3em]"/>
	</div>
  )
}

export default Search