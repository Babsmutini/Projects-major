import React from "react";
import { BsSkipBackwardCircle, BsSkipForwardCircle } from "react-icons/bs";
import { MdReplay10, MdForward10, MdPlayCircleFilled, MdPauseCircleFilled } from "react-icons/md";
import newImage from "../../img/image.png";
const MiniPlayer = () => {
    return (
        <>
            <div className="flex flex-col justify-center">
                <img src={newImage} alt="podcast" width={200} className="mx-auto" />
                <div className="px-9">
                    <p className="text-white text-[0.85em]">
                        629. Antihustle and how to build something meanningful with judah smith
                    </p>
                    <p className=" text-gray-500 text-[0.85em]">
                        The smart passive income online business store
                    </p>
                </div>

                {/* icons pack */}
                <div className="flex text-[2em] items-center gap-2 justify-center text-white">
                    <MdReplay10 />
                    <BsSkipBackwardCircle />
                    {/* <MdPlayCircleFilled/> */}
                    <MdPauseCircleFilled fontSize={50} />
                    <BsSkipForwardCircle />
                    <MdForward10 />
                </div>
            </div>
        </>
    );
};

export default MiniPlayer;
