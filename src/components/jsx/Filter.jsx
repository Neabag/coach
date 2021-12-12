import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterBox from './FilterBox' ;
function Filter(props) {
    const filterByGender =(filter)=>{
        props.gender(filter);
    }
    let filterOptions = "";
    if(props.filter.displayName){
        switch(props.filter.displayName){
            case "Gender" : 
                filterOptions = <div className="filter-gender"><FilterBox data={props.filter.value} click={filterByGender}/></div>
            break;
            case "Size" :
                filterOptions = <div className="filter-size"><FilterBox data={props.filter.value}/></div>
            break;
            case "Color" :
                filterOptions = <div className="filter-color"><FilterBox data={props.filter.value}/></div>
            break;
            case "Price" :
                filterOptions = <div className="filter-price">
                    <div className="price-range d-flex justify-content-between">
                        <div className="minprice priceBox">
                            <div className="price-text">{"MIN PRICE"}</div>
                            <div className="minprice-value">${props.filter.minValue}</div>
                        </div>
                        <div className="range-text">{"TO"}</div>
                        <div className="maxprice priceBox">
                            <div className="price-text">{"MIN PRICE"}</div>
                            <div className="maxprice-value">${"2500"}</div>
                        </div>
                    </div>
                    <div className="price-range-bar">
                        <input type="range" className="price-selecter" range="" />
                    </div>
                </div>
            break;
            default:
                filterOptions = <div className="filter-generic"><FilterBox data={[{refvalue:"YES"}, {refvalue:"NO"}]}/></div>
        }
    }
    

    return (
        <div className="filter-card">
            <Accordion className="filter-card-box">
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="filter-card__accordion"
                >
                <Typography className="filter-name">{props.filter.displayName.toUpperCase()}</Typography>
                </AccordionSummary>
                <AccordionDetails className="filter-card__accordion__details">
                <Typography>
                    {filterOptions}
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Filter
