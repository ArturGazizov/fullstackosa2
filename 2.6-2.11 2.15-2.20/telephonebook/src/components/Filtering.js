import React from "react";

const Filtering = ({handleFilterChange}) => {

return (
  <div>
  Filter by name : <input onChange={handleFilterChange}/>
  </div>

)
}

export default Filtering