import React from 'react'
import {SlMagnifier} from 'react-icons/sl'
const Search = () => {
  return (
	<div className='relative'>
		<input type="text" placeholder='Search' className='absolute border border-[#373552] bg-[#191934] rounded-full pl-8 text-white p-2 w-[300px]'/>
		<SlMagnifier className=" absolute left-3 top-4 text-[#898A9F]"/>
	</div>
  )
}

export default Search