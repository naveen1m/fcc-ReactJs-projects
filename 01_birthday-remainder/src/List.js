import React from 'react'


function List({people}) {
    
  return (
    <>
      <ul>
        {people.map((person)=>(
            <>
            <img src={person.image} alt={person.name} />
            <h3 key={person.id} >name: {person.name}</h3>
            <p>age: {person.age} years </p>
            
            </>
        ))}
      </ul>
    </>
  )
}

export default List
