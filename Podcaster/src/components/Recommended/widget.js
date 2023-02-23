import React from "react";

const RecommendWidget = ({ img, tag, title, artiste }) => {
    return (
        <>
            <div className="rounded-xl bg-[#1C1839] flex flex-col w-[200px] ">
                <div className="p-4">
                    <img src={img} alt="" className="rounded-xl h-[150px] w-full " />
                    <p className="text-[#A965F7] uppercase text-[0.85em] mt-4">{tag}</p>
                    <h4 className="text-[1.3em] capitalize text-white font-semibold my-2">{title}</h4>
                    <p className="capitalize text-gray-400 text-[0.8em]">{artiste}</p>
                </div>
            </div>
        </>
    );
};

export default RecommendWidget;
