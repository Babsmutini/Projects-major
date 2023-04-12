import React from "react";
import SidebarItems from "../SidebarItems";
import {CgHome} from 'react-icons/cg'
import {BsFiles, BsMicFill }from 'react-icons/bs'
import {AiOutlineAppstore} from 'react-icons/ai'
import {MdDownloading} from 'react-icons/md'
import {Link} from "react-router-dom"
import {SiMusicbrainz} from 'react-icons/si'
import MiniPlayer from '../MiniPlayer/index';
const Sidebar = () => {
	return(
		<>
			<div className=" bg-[#1C1D36] h-screen sticky top-0 flex flex-col ">
				<div className="flex gap-3 text-[2em] text-bold py-6 items-center pl-8 text-white">
					<SiMusicbrainz/> Podcaster
					{/* <GiLightningFrequency color="#8878B8"/> Podcaster */}
				</div>
				{/* middle section  */}
				<div className="pr-8 pl-5">
					<Link to="/">

					<SidebarItems name="Home" icon={<CgHome color="" />} active="true"/>
					</Link>
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