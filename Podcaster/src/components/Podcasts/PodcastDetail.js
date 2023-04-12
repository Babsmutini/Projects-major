import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../../img/dean.jpeg";
import Episode from "./Episode";
import {data} from "./index";

const podData = data;

const PodcastDetail = ({ image, tag, title, description }) => {
    
    const {id} = useParams();
    const dataset = {
        tag: "CHURCHHOME",
        title: "300.Who is sending you? - The Last Conversation",
        summary:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum fugiat ducimus autem quod dolor. Laboriosam minima impedit omnis ipsam, nisi voluptates nostrum itaque! Dolorem ea beatae exercitationem eligendi? Corporis.",
        duration: 21,
        durationelapsed: 20,
        date_posted: "20 December",
    };
    return (
        <>
            
            {/* show detail  */}
            <div className="flex gap-4">
                {/* image */}
                <div className="flex-[0.3]">
                    <img src={image || img1} alt="" className="w-full  rounded-lg" />
                </div>
                {/* details */}
                <div className="flex-[0.7] self-center text-white">
                    <p>{tag || dataset.tag}</p>
                    <h2 className="text-[1.5em]">{title || dataset.title}</h2>
                    <p>{description || dataset.summary}</p>
                </div>
            </div>
            <br />
            <hr />
            <br />
            {podData.map((data,index) => 	<Episode date={data.date_posted} title={data.title} description={data.summary} duration={data.duration}/>
			)}
        </>
    );
};

export default PodcastDetail;
