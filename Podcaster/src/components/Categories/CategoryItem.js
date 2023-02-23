import React from "react";

const CategoryItem = ({ icon, text }) => {
    return (
        <div className=" flex gap-2 py-4 px-6 bg-[#14142F] min-w-fit rounded-full items-center border border-[#373552]">
            <div className="text-[#534495] text-[1.3em]">{icon}</div>
            <div
                className="text-white
		"
            >
                {text}
            </div>
        </div>
    );
};

export default CategoryItem;
