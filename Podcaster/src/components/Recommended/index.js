import React from 'react'
import RecommendWidget from './widget';
import img1 from "../../img/dean.jpeg"
import img2 from "../../img/Earn_your_happy.jpg"
import img3 from "../../img/download.jpeg"
import img4 from "../../img/do_more_gooder.svg"

const Recommended = () => {
  return (
	<>
	<div>
		<div className='flex justify-between mb-4'>
			<h1 className='text-[1.5em] capitalize text-white'>Recommended For You</h1>
			<p className='text-[#a965f7]'>View All</p>
		</div>
		<div className='grid grid-cols-4 gap-4'>
			<RecommendWidget img={img3} tag="Alternative Health" title="The school of greatness" artiste="lewis homes"/>
			<RecommendWidget img={img4} tag="Design" title="Unfold - do more gooder" artiste="unfold"/>
			<RecommendWidget img={img1} tag="Courses" title="The dean graziosi show" artiste="dean graziosi"/>
			<RecommendWidget img={img2} tag="Entrepreneurship" title="Earn your happy" artiste="Lori Harder"/>
		</div>
	</div>
	</>
  )
}

export default Recommended