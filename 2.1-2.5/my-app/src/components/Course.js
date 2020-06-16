import React from 'react'










const Header = ({course}) => {
  return (
    <div>
      <p>{course.name}</p>
    </div>
  )
}

const Part = ({name,exercises,id}) => {
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

const Contents = ({parts}) => {
  return (
    <div>
    <ul>
    {parts.map((part)=><li key={part.id}>{Part(part)}</li>)}
    </ul>
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      <p>Total {[0].concat(parts).reduce((total,add)=>total+add.exercises)} exercises</p>
    </div>
  )
}





const Course = ({course}) => 
{








  return (
    <div>


    <Header course={course}/>
    <Contents parts={course.parts}/>
    <Total parts={course.parts}/>

      
      
    </div>
  )
}


export default Course