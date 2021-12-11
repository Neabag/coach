import React from 'react'
import Filter from './Filter';

function Filters(props) {
    return (
      <div className="filters-wrapper pl-3 mt-3">
        <div>NEW ARRIVALS</div>
        {props.filters.length
          ? 
          (<>
            {props.filters.map((item, index) => {
              return <Filter key={index} filter ={item} gender={props.filterBygender}/>
            })}
            </>)
          : ""}
      </div>
    );
}

export default Filters
