import React from 'react'
import "../Categories/styles.css"
import PodcastWidget from './PodcastWidget';

import img1 from "../../img/dean.jpeg"
import img2 from "../../img/Earn_your_happy.jpg"
import img3 from "../../img/download.jpeg"

const Podcast = () => {
	const data = [
		{
			image : img1,
			tag: "CHURCHHOME",
			title: "300.Who is sending you? - The Last Conversation",
			summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum fugiat ducimus autem quod dolor. Laboriosam minima impedit omnis ipsam, nisi voluptates nostrum itaque! Dolorem ea beatae exercitationem eligendi? Corporis.",
			duration: 21,
			durationelapsed: 20,
			date_posted: ""
		},
		{
			image : img3,
			tag: "CHURCHHOME",
			title: "300.Who is sending you? - The Last Conversation",
			summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum fugiat ducimus autem quod dolor. Laboriosam minima impedit omnis ipsam, nisi voluptates nostrum itaque! Dolorem ea beatae exercitationem eligendi? Corporis.",
			duration: 21,
			durationelapsed: 20,
			date_posted: ""
		},
		{
			image : img3,
			tag: "CHURCHHOME",
			title: "300.Who is sending you? - The Last Conversation",
			summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum fugiat ducimus autem quod dolor. Laboriosam minima impedit omnis ipsam, nisi voluptates nostrum itaque! Dolorem ea beatae exercitationem eligendi? Corporis.",
			duration: 21,
			durationelapsed: 20,
			date_posted: ""
		},
		{
			image : img3,
			tag: "CHURCHHOME",
			title: "300.Who is sending you? - The Last Conversation",
			summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, harum fugiat ducimus autem quod dolor. Laboriosam minima impedit omnis ipsam, nisi voluptates nostrum itaque! Dolorem ea beatae exercitationem eligendi? Corporis.",
			duration: 21,
			durationelapsed: 20,
			date_posted: ""
		},
		

	]
  return (
	<div>
		<div className='w-full flex justify-between mt-4 text-white'>
		<h1 className='text-[1.5em] capitalize'>Podcasts you follow</h1>
		<a href="/">View all</a>
		</div>
		<div className='flex gap-4 my-4 w-full overflow-x-scroll '>
			{data.map((data,index) => (
				<PodcastWidget key={index} img={data.image} tag={data.tag} title={data.title} summary={data.summary} duration={data.duration} duration_elapsed={data.durationelapsed} date={data.date_posted}/>
			))}
		</div>
		


	</div>
  )
}

export default Podcast