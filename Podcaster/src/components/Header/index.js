import React from 'react'
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi'

const Header = () => {
	<>
		<div className='py-8'>
			<div>
				<div className='relative'>
					<input type="text" name="" id="" />
					<span className=' absolute'><AiOutlineSearch/> </span>
				</div>
			</div>
			{/* Second section  */}
			<div className='flex items-center'>
				<AiOutlineSetting/>
				<BiUserCircle/>
			</div>
		</div>
	</>
}


export default Header;