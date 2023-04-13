import React from "react";
import "../Categories/styles.css";
import PodcastWidget from "./PodcastWidget";

import img1 from "../../img/dean.jpeg";
import img2 from "../../img/Earn_your_happy.jpg";
import img3 from "../../img/download.jpeg";
import useFetch from "../../utilities/useFetch";

export const data = [
    {
        image: img1,
        tag: "CHURCHHOME",
        title: "300.Who is sending you? - The Last Conversation",
        summary:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum fugiat ducimus autem quod dolor. Laboriosam minima impedit omnis ipsam, nisi voluptates nostrum itaque! Dolorem ea beatae exercitationem eligendi? Corporis.",
        duration: 21,
        author: "Yasmine Booker",
        durationelapsed: 20,
        date_posted: "20 December",
    },
    {
        image: img3,
        tag: "MARKETING MADE SIMPLE",
        title: "How to fundraise using the StoryBand Framework",
        summary:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum fugiat ducimus autem quod dolor. Laboriosam minima impedit omnis ipsam, nisi voluptates nostrum itaque! Dolorem ea beatae exercitationem eligendi? Corporis.",
        duration: 21,
        author: "Aiza Shea",
        durationelapsed: 20,
        date_posted: "20 November",
    },
    {
        image: img3,
        tag: "CHURCHHOME",
        title: "300.Who is sending you? - The Last Conversation",
        summary:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum fugiat ducimus autem quod dolor. Laboriosam minima impedit omnis ipsam, nisi voluptates nostrum itaque! Dolorem ea beatae exercitationem eligendi? Corporis.",
        duration: 21,
        author: "Yasmine Booker",
        durationelapsed: "",
        date_posted: "31 December",
    },
    {
        image: img3,
        tag: "CHURCHHOME",
        title: "300.Who is sending you? - The Last Conversation",
        summary:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum fugiat ducimus autem quod dolor. Laboriosam minima impedit omnis ipsam, nisi voluptates nostrum itaque! Dolorem ea beatae exercitationem eligendi? Corporis.",
        duration: 21,
        author: "Yasmine Booker",
        durationelapsed: "",
        date_posted: "31 December",
    },
];

const Podcast = () => {
    const { data: podcastData, error  } = useFetch(
        // "https://api.podcastindex.org/api/1.0/podcasts/trending?max=4&lang=en",
        // "https://api.podcastindex.org/api/1.0/podcasts/bymedium?medium=podcast&pretty",
        "GET"
    );
    console.log(podcastData);

    return (
        <div className="w-full">
            <div className="w-full flex justify-between">
                <h1 className="text-[1.5em] font-semibold capitalize">For you</h1>
                <a href="/" className="text-[#A965F7]">
                    View all
                </a>
            </div>
            <div>
                <ul className="space-x-4 flex text-gray-400">
                    <li className="text-[#EE732F]">new</li>
                    <li>playlists</li>
                    <li>episodes</li>
                </ul>
            </div>
            <div className="grid grid-cols-4 gap-4 w-full">
                {podcastData
                    ? podcastData?.feeds.map((item) => (
                          <PodcastWidget
                              key={item.id}
                              img={item.image}
                              url={item.url}
                              title={item.title}
                              // summary={data.summary}
                              // duration={data.duration}
                              author={item.author}
                              // duration_elapsed={data.durationelapsed}
                              // date={data.date_posted}
                          />
                      ))
                    : data.map((data, index) => (
                          <PodcastWidget
                              key={index}
                              img={data.image}
                              tag={data.tag}
                              title={data.title}
                              summary={data.summary}
                              duration={data.duration}
                              author={data.author}
                              duration_elapsed={data.durationelapsed}
                              date={data.date_posted}
                          />
                      ))}
            </div>
        </div>
    );
};

export default Podcast;
