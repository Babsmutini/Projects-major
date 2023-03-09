import React from "react";
import SidebarItems from "../SidebarItems";
import {CgHome} from 'react-icons/cg'
import {BsFiles, BsMicFill }from 'react-icons/bs'
import {AiOutlineAppstore} from 'react-icons/ai'
import {MdDownloading} from 'react-icons/md'
import {GiLightningFrequency} from 'react-icons/gi'
import MiniPlayer from '../MiniPlayer/index';
const Sidebar = () => {
	return(
		<>
			<div className="w-[250px] bg-[#1B1C33] h-screen fixed flex flex-col flex-[0.2]">
				<div className="flex gap-3 text-[1.5em] text-bold py-6 pl-8 text-white">
					<GiLightningFrequency color="#8878B8"/> Podcaster
				</div>
				{/* middle section  */}
				<div className="pl-8">
					<SidebarItems name="Home" icon={<CgHome color="" />}/>
					<SidebarItems name="Latest Episodes" icon={<BsMicFill/>}/>
					<SidebarItems name="Saved" icon={<BsFiles/>}/>
					<SidebarItems name="Browsed" icon={<AiOutlineAppstore/>} />
					<SidebarItems name="Downloads" icon={<MdDownloading/>}/>
				</div>
				{/* Footer section  */}
				{/* <div className="mt-auto mb-6">
					<MiniPlayer/>
				</div> */}
			</div>
		
		</>
	);

}

export default Sidebar;