import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import sflDefaultIcon from '../../icons/icon-utility-favorite-default.svg';
import sflFilledIcon from '../../icons/icon-utility-favorite-filled.svg'
import ProductRatings from './ProductRatings';

function ProductCard(props) {
    const [sfl, setSfl]=useState(false);
    const saveForLater=(e)=>{
      e.stopPropagation()
      setSfl(!sfl);
    }
    const navigate = useNavigate();
    return (
        <div className="card pr-3 pr-md-0">
          <div className="product-card">
            <div className="product-card__img" onClick={()=>{navigate("/PDP/"+props.product.activeProductData.pid +"/"+ props.product.minPrices)}}>
              <img src={props.product.image}  alt="product pic"/>
              <button className="quick-view text-center">
                {"QUICK VIEW"}
              </button>
            </div>
            <div className="product-sfl">
              <button className="sfl" onClick={(e)=>saveForLater(e)}>
                {sfl ? <img src={sflFilledIcon} alt="sfl-icon"/> : <img src={sflDefaultIcon} alt="sfl-icon"/>}
                
              </button>
            </div>
            <div className="product-details" onClick={()=>{navigate("/PDP/"+props.product.activeProductData.pid +"/"+ props.product.minPrices)}}>
              <div className="product-name">
                {props.product.name}
              </div>
              <div className="product-price">
                ${props.product.minPrices}
              </div>
              <ProductRatings/>
            </div>
          </div>
        </div>
    )
}

export default ProductCard
