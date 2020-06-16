
import React, { useState, useEffect } from "react";
import Country from './Country'

const Showing = ({all,goto,weather}) => {
const [ open, setOpen ] = useState(false)

const change=()=>{setOpen(!open)}


if (!open)
return (
  <span>
  {all.name}
  <input type="button" value="show only this" onClick={goto}/>
  <input type="button" value="show among all" onClick={change}/>
  </span>
)
if (open)
return (<span>
<Country country={all} weather={weather}/>
  <input type="button" value="show one" onClick={goto}/>
  <input type="button" value="hide among all" onClick={change}/>
  </span>)
}

export default Showing