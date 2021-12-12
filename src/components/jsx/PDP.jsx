import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import endPoints from '../endpoints';
import ProductRatings from './product/ProductRatings';
import Spinner from './Spinner';
function PDP() {
    const {pid, varient} = useParams();
    console.log(varient);
    const [productData, setProductData] = useState({});
    const [selectedVariant, setSelectedVariant] = useState();
    useEffect(() => {
      axios.get(endPoints.pdp+"/"+pid).then((res)=>{
        setProductData(res.data);
        setSelectedVariant(res.data.defaultColor);
      })
    }, [pid]);

    const selectSwatch =(item)=>{
      setSelectedVariant(item);
      setProductData({...productData, "thumbnail":item.media.thumbnail})
    }

    return (
      <>
      {productData && selectedVariant ? (
        <div className={"prduct-details-page d-md-flex justify-content-center m-3 pid-"+pid }>
          {selectedVariant.media && selectedVariant.media.thumbnail ? <div className="product-img-wrapper">
            <img
              src={selectedVariant.media.thumbnail.src}
              className="product-img"
              alt={selectedVariant.media.thumbnail.alt}
            />
          </div> :<Spinner/>}
          <div className="product-details pl-md-4">
            <p className="product-name">{productData && productData.custom ? productData.custom.c_productNameH1: ""}</p>
            <ProductRatings/>
            <div className="product-price pt-2 pb-2">{productData && productData.formattedPricing && productData.formattedPricing.length && productData.formattedPricing[0].sales ? productData.formattedPricing[0].sales.formatted : "N/A"}</div>
            <div className="product-varients">
              <div className="variant-attribute"><span className="variant-attribute-name pr-3"><strong>COLOR:</strong></span><span className="variant-attribute-value">{selectedVariant && selectedVariant.text ? selectedVariant.text : 'N/A'}</span></div>
              {productData.colors && productData.colors.length ?
              <div className="varient-options d-flex flex-wrap mt-2">
                {productData.colors.map((item, index)=>{return(
                    <button key ={index} className={"variant-item p-0 mb-2 mr-2 "+ (selectedVariant.id === item.id ? "selected":'')} onClick={()=>selectSwatch(item)} title={item.text}>
                      <img src={item.media.thumbnail.src} alt={item.media.thumbnail.alt} className="varient-item-img"/>
                    </button>
                )})}
              </div>:''}
            </div>
            {productData.custom ? <div className="product-desc">
              <div className="product-desc__heading pt-3"><strong>{"Product Description"}</strong></div>
              <p className="product-desc__content">{productData.custom.c_editorsNoteDescription}</p>
            </div>:"N/A"}
          </div>
          
      </div>
      ):<Spinner/>}
      </>
    );
}

export default PDP
