import React, { useState } from 'react'
import people from './data'
import { FaQuoteRight,FaChevronLeft, FaChevronRight} from 'react-icons/fa'
function Reviews() {
    const [index, setIndex] = useState(0);
    const {name, job,image,text} = people[index];
    
    const checkNumber = (number)=>{
        if(number > people.length -1){
            return 0;
        }
        if(number < 0){
            return people.length -1
        }
        return number
    }
    function nextPerson(){
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }
    function prevPerson(){
       setIndex((index)=>{
        let newIndex = index - 1;
        return checkNumber(newIndex)
       })
    }
    const randomPerson = ()=>{
        setIndex((index)=>{
            let newIndex = Math.floor(Math.random() * people.length);
            if(newIndex === index){
                newIndex = index + 1;
            }
            return checkNumber(newIndex)
        })
    }
  return (
    <article className='review'>
       <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h2 className='author'>{name}</h2>
      <h4 className='job'>{job}</h4>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
        <button className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
}

export default Reviews
