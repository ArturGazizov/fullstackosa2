import React, {useEffect } from "react";
import Showing from './Showing'
import Country from './Country'

//import personService from '../services/persons'

const Countries = ({countries,goto,weather}) => 
{


useEffect(() => {

}, []);



  

if(countries.length>10)
{return (<div>'too many matches, specify another filter'</div>)}
else if(countries.length==1)
{return (<div><Country country={countries[0]} weather={weather}/></div>)}      
else if (countries.length>1)
{return (<div><ul>{countries.map((it)=><li key={it.numericCode}><Showing all={it} goto={goto(it.name)} weather={weather}/></li>)}
</ul></div>)}
return (<div>{'no countries start with there letters'}</div>)
      
    
}


export default Countries