import React, {useState} from 'react'

function FilterBox(props) {
    const [selectedOption, setSelectedOption] = useState();

    const selectOption = (option)=>{
        if(props.click){
            props.click(option.refvalue);
        }
        setSelectedOption(option.refvalue);
    }
    return (
        <>
        {props.data.length ?(<div className="d-flex flex-wrap pb-3">
            {props.data.map((item, index)=>{
                return(<div key ={index} className={"filter-desc filter-item "+ (selectedOption === item.refvalue ? "selected" : "")} onClick={()=> selectOption(item)}>{item.refvalue}</div>)})}
        </div>)
        : ""}
        </>
    )
}

export default FilterBox
