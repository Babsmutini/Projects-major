import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const PodcastWidget = ({ img, tag, title, summary, date, duration, duration_elapsed }) => {
    return (
            <div className="p-4 flex gap-4 min-w-[480px] bg-[#191934] overflow-auto rounded-lg my-3 ">
                <img src={img} alt="" className="rounded-xl h-[190px] w-[180px] " />
                <div className="flex flex-col ">
                    <p className="text-[#A965F7] uppercase text-[0.85em] ">{tag}</p>
                    <h4 className="text-[1.1em] capitalize text-white font-semibold my-2 break-words">
                        {title}
                    </h4>
                    {/* <p className=" text-gray-400 ">{summary.slice("0", "46") + " ..."}</p> */}
                    <p className="text-gray-400 line-clamp-2">{summary}</p>
                    <div className="flex justify-between items-center mt-4 text-white">
                        {duration_elapsed ? (
                            <button className="bg-[#a965f7] flex items-center rounded-2xl py-1 px-2">
                                <BsFillPlayFill className="text-[1.5em]" />
                                Resume
                            </button>
                        ) : (
                            date
                        )}

                        <p className="text-white">
                            {duration_elapsed ? `${duration_elapsed} min left` : `${duration} min` }
                        </p>
                    </div>
                </div>
            </div>
      
    );
};

export default PodcastWidget;
