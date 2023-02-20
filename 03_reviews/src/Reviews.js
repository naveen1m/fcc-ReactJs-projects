import React, { useState } from 'react'
import people from './data'
import { FaQuoteRight,FaChevronLeft, FaChevronRight} from 'react-icons/fa'
function Reviews() {
    const [
        {id: id1,name: name1,job: job1,image: image1,text: text1},
        {id: id2,name: name2,job: job2,image: image2,text: text2},
        {id: id3,name: name3,job: job3,image: image3,text: text3},
        {id: id4,name: name4,job: job4,image: image4,text: text4},
    ] = people;

  return (
    <article className='review'>
       <div className='img-container'>
        <img src={image1} alt={name1} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h2 className='author'>{name1}</h2>
      <h4 className='job'>{job1}</h4>
      <p className='info'>{text1}</p>
      <div className='button-container'>
        <button className='prev-btn'><FaChevronLeft /></button>
        <button className='next-btn'><FaChevronRight /></button>
      </div>
      <button className='random-btn'>
        surprise me
      </button>
    </article>
  )
}

export default Reviews
