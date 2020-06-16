import React, { useState, useEffect } from "react";


//import personService from '../services/persons'

const Country = ({country,weather}) => 
{
const [ currentweather, setCurrentweather ] = useState(['',[],'',''])


useEffect(() => {

weather(country.capital).then((data)=>
{
	if(data)
if (data.status=="200")
	setCurrentweather([
	data.data.current.temperature,
	data.data.current.weather_icons,
	data.data.current.wind_dir,
	data.data.current.wind_speed])}

)
  }, []);

	return(<div>
    <h1>{country.name}
</h1>
<span>capital &nbsp;{country.capital}</span><br/>
<span>population &nbsp;{country.population}</span>
<h2>languages</h2>
<ul>{country.languages.map((itt)=><li>{itt.name}</li>)}</ul>
<img style={{width:400,height:200}} src={country.flag}/>
<h2>Weather in {country.capital}</h2>
<b>temperature:</b>{currentweather[0]}  
<br/> 
{currentweather[1].map((ittt)=><img src={ittt} style={{width:50,height:50}}/> )}
<br/> 
<b>wind:</b> {currentweather[3]} direction {currentweather[2]}

</div>
)
}


export default Country
