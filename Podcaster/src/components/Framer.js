import React from "react";
import Categories from "./Categories";
import Podcast from "./Podcasts";
import Recommended from "./Recommended";

const Framer = () => {
    return (
        <>
            <Podcast/>
            <Categories />
            <Recommended />
        </>
    );
};

export default Framer;
