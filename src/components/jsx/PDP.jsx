import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import endPoints from '../endpoints';
import ProductRatings from './product/ProductRatings';
import Spinner from './Spinner';
function PDP() {
    const {pid, price} = useParams();
    const [productData, setProductData] = useState({});
    useEffect(() => {
      axios.get(endPoints.pdp+"/"+pid).then((res)=>{
        console.log("printing product data",res.data);
        setProductData(res.data);
      })
    }, [pid]);

    return (
      <>
      {productData ? (
        <div className={"prduct-details-page d-md-flex justify-content-around m-3 pid-"+pid }>
          {productData.thumbnail ? <div className="product-img-wrapper p-3">
          <img
            src={productData.thumbnail.src}
            className="product-img"
            alt={productData.thumbnail.alt}
          />
        </div> :<Spinner/>}
        <div className="product-details">
          <p className="card-text">{productData && productData.custom ? productData.custom.c_productNameH1: ""}</p>
          <ProductRatings/>
          <p className="card-text">{productData && productData.formattedPricing && productData.formattedPricing.length && productData.formattedPricing[0].sales ? productData.formattedPricing[0].sales.formatted : "N/A"}</p>
        </div>
      </div>
      ):<Spinner/>}
      </>
    );
}

export default PDP
