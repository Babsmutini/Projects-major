import React from "react";
import newImage from "../../img/image.png"
const MiniPlayer = () => {
    return (
        <>
            <div className="flex flex-col">
                <img src={newImage} alt="podcast" width={200} />
				<span className="text-white text-[0.85em]">629. Antihustle and how to build something meanningful with judah smith</span>
				<span className=" text-gray-500 text-[0.85em]">The smart passive income online business store</span>
				{/* icons pack */}
				<div className="flex">

				</div>
			</div>
        </>
    );
};

export default MiniPlayer;
