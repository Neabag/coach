import React from 'react'

function ProductRatings() {
    const r4 = Math.random() < 0.5;
    const r5 = Math.random() < 0.5;
    return (
        <div className="product-rating d-flex">
            <div className="product-ratings__star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className={r4 ? "fa fa-star checked":'fa fa-star'}></span>
                <span className={r4 && r5 ? "fa fa-star checked":'fa fa-star'}></span>
            </div>
            <div className="product-ratings__total">({Math.floor(Math.random(1,2)*50)})</div>
        </div>
    )
}

export default ProductRatings
