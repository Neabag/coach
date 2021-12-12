import React,{useState, useEffect} from 'react';

function Sorting(props) {
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState({});
  const toggleSorting =(toggle = !sortOpen)=>{
    setSortOpen(toggle);
  }
  const updateSortingSelection =(item, index)=>{
    setSelectedSorting(item);
    props.click(index)
  }
  useEffect(() => {
    setSelectedSorting(props.sortingData.length ? props.sortingData[props.sortingData.length-1]: {});
  }, [props.sortingData]);

  return (
        <div className="sorting pt-1 align-self-md-end d-none d-md-flex">
          {props.sortingData.length ? (
          <div className="sortby-section" >
            <div className="sortby-text-wrapper d-flex" onMouseEnter={()=>toggleSorting(true)} onClick={()=>toggleSorting()} >
              <div className="sortby-text pr-2">Sort by: </div>
              <div className="sortby-selection d-flex pr-2">
                <span className="sortby-selected-item pr-2">{selectedSorting ? selectedSorting.displayName :""}</span>
                <span className={sortOpen ? "fa fa-caret-up sorting-icon" : "fa fa-caret-down sorting-icon"}></span>
              </div>
            </div>
            <div className={sortOpen ? "d-md-block sorting-options" : "d-none sorting-options"} onMouseLeave={()=>toggleSorting(false)}>
              {props.sortingData.map((item, index) => {
                return <div className={selectedSorting.displayName === item.displayName ? "selected sorting-item": "sorting-item"} key ={index} onClick={()=>updateSortingSelection(item,index)}>{item.displayName}</div>;
              })}
            </div>
          </div>):
          ""
        }
        </div>
    )
}

export default Sorting
