import Countries from './components/Countries'
import Forms from './components/Forms'
import Showing from './components/Showing'
import axios from 'axios'

import React, { useState, useEffect } from "react";

const api_key = process.env.REACT_APP_API_KEY


//"http://api.weatherstack.com/current?access_key="+api_key+"&query="+city
const countriesurl="https://restcountries.eu/rest/v2/all"

const getcountries = () => {
  return axios.get(countriesurl)
}


const getweather = (city) => {
  return axios.get("http://api.weatherstack.com/current?access_key="+api_key+"&query="+city)
}



const App = () => {

  const [ countries, setCountries ] = useState([])

const goto=(thename)=>{return ()=>{handleFilterChange({"target":{"value":thename}})}}

const handleFilterChange = (event) =>
{ 
let value=event.target.value
const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

value=capitalize(value)

value=value.replace(' Of ', " of ");
value=value.replace(' Of)', " of)");
value=value.replace(' Part', " part");
value=value.replace(' And ', " and ");
value=value.replace(' The ', " the ");
  getcountries().then(data=>{   

 
    const filteredcountries=data.data.filter((it)=>it.name.startsWith(value))

setCountries(filteredcountries)

  }) 
}
    return (
      <div>
      enter name
      <input onChange={handleFilterChange}></input>
      <Countries countries={countries} goto={goto} weather={getweather}/>

      </div>

    );
};

export default App
