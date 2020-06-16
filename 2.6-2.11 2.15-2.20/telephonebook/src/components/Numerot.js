import React, {useEffect } from "react";

//import personService from '../services/persons'

const Numerot = ({filtering,persons,functions}) => 
{


useEffect(() => {
persons=persons.filter((it)=>it.name.startsWith(filtering))
}, []);

persons=persons.filter((it)=>it.name.startsWith(filtering))


//onClick=personService.remove(id)


  return (
    <div>


<h2>Numerot</h2>
        <ul>
        {persons.map(it=><li key={it.id}>{it.name}&nbsp;{it.number}<button onClick={functions(it.id,it.name)}> poista </button></li>)}
        </ul>
     
      
    </div>
  )
}


export default Numerot