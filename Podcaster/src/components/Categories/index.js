import React from 'react'
import CategoryItem from './CategoryItem'
import {IoLogoReact} from 'react-icons/io5'
import {BiBriefcase} from 'react-icons/bi'
import {GiPorcelainVase} from 'react-icons/gi'
import {GiAngelWings} from 'react-icons/gi'

const Categories = () => {
  return (
	<>
	<div className='my-4'>
		<div>
			<h1 className="text-[1.5em] text-white">Top categories</h1>
		</div>
		<div className='flex gap-4 overflow-x-scroll my-4 w-full'>
			<CategoryItem icon={<IoLogoReact/>} text="Technology"/>
			<CategoryItem icon={<GiPorcelainVase/>} text="Society and culture"/>
			<CategoryItem icon={<BiBriefcase/>} text="Business"/>
			<CategoryItem icon={<GiAngelWings/>} text="Religion and spirituality"/>
			<CategoryItem icon={<BiBriefcase/>} text="Business"/>
		</div>
	</div>
	</>
	
  )
}

export default Categories