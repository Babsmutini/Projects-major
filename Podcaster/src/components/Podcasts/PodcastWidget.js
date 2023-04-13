import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const PodcastWidget = ({ img, tag, title, summary, date, author, episode_count, duration, duration_elapsed }) => {
    const [liked, setLiked] = useState(false);
    return (
        <div className=" bg-[#fff]  my-3 ">
            <div className="relative">
                <img src={img} alt="" className="rounded-xl h-[250px] w-full object-center" />
                <div
                    className="absolute top-3 flex justify-center items-center right-3 cursor-pointer bg-white rounded-full h-8 w-8 text-[1.5rem]"
                    onClick={(e) => {
                        e.stopPropagation();
                        setLiked(!liked);
                    }}
                >
                    {liked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
                </div>
                <div className="absolute left-2 bottom-4">
                    <span className="p-1  bg-[#F0F4F8] text-[0.8rem] rounded-lg">
                    {`${episode_count || "10"} episodes`}
                    </span>
                    
                </div>
            </div>
            <div className="flex flex-col  "></div>
            <div className="flex flex-col pt-4 mb-2">
                <p className="font-semibold">{title}</p>
                <p className="text-gray-400 text-[0.9rem]">{`by ${author}`}</p>
            </div>
        </div>
    );
};

export default PodcastWidget;
