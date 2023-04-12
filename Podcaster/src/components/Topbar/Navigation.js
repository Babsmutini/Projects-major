import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className="flex text-[1.2em] gap-4">
                <Link >
                    <BsChevronLeft />
                </Link>
                <Link>
                    <BsChevronRight />
                </Link>
            </div>
        </>
    );
};

export default Navigation;
