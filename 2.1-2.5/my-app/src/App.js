import React from 'react'
import Course from './components/Course'


const App = () => {
  const courses = [{
    name: 'Superadvanced web and mobile programming',
    id:1,
    parts: [
      {
        name: 'Basics of React',
        exercises: 8,
        id:1
      },
      {
        name: 'Using props',
        exercises: 10,
        id:2
      },
      {
        name: 'Component states',
        exercises: 12,
        id:3
      }
    ]
  },
  {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
    ]



return (
    <div>
    {courses.map((course)=><Course course={course}/>)}
      </div>
)
}



export default App