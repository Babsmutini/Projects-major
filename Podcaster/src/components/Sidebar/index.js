import React from "react";
import SidebarItems from "../SidebarItems";
import { CgHome } from "react-icons/cg";
import { BsFiles, BsMicFill } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdDownloading } from "react-icons/md";
import { Link } from "react-router-dom";
import { SiMusicbrainz } from "react-icons/si";
import MiniPlayer from "../MiniPlayer/index";
const Sidebar = () => {
    return (
        <>
            <div className=" bg-[#F2F1F5] h-screen sticky top-0 flex flex-col ">
                <div className="flex gap-3 text-[2em] text-bold py-6 items-center pl-8 ">
                    <SiMusicbrainz /> Podcaster
                    {/* <GiLightningFrequency color="#8878B8"/> Podcaster */}
                </div>
                {/* middle section  */}
                <div className="pr-8 pl-8">
                    <h4 className="text-gray-500 pl-2 mb-4">Menu</h4>
                    <Link to="/">
                        <SidebarItems name="Home" icon={<CgHome color="" />} active="true" />
                    </Link>
                    <SidebarItems name="Categories" icon={<AiOutlineAppstore />} />
                    <SidebarItems name="Saved" icon={<BsFiles />} />
                </div>
                <div className="mt-8 pl-10">
                    <h4 className=" text-gray-500 mb-4">Playlists</h4>
						<ul className="list-inside space-y-4">
							<li>Meditations</li>
							<li>About Space</li>
							<li>Bookcast</li>
							<li>Design practice</li>
							<li>Motivating & Focus</li>
						
						</ul>
                    {/* <SidebarItems name="Meditations" icon={<AiOutlineAppstore />} />
                    <SidebarItems name="About space" icon={<MdDownloading />} />
                    <SidebarItems name="Bookcast" icon={<AiOutlineAppstore />} />
                    <SidebarItems name="Design practice" icon={<MdDownloading />} />
                    <SidebarItems name="Motivating & focus" icon={<MdDownloading />} /> */}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
