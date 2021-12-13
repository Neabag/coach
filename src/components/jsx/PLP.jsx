import React ,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import endPoints from '../endpoints';
import Filters from './Filters';
import ProductCard from './product/ProductCard';
import Sorting from "./Sorting";
import Spinner from "./Spinner";

function PLP(props) {
    const {categoryId} =useParams();
    const [sortingOptions, setSortingOptions] = useState([]);
    const [filters, setFilters] = useState([]);
    const [products, setProducts] = useState([]);
    const [allProduct, setAllProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get(endPoints.products+"/"+categoryId).then(function(res){
            console.log("monkey got the data", res.data);
            setSortingOptions(res.data.sortingOptions);
            setFilters(res.data.refinements);
            setAllProducts(res.data.hits);
            setProducts(res.data.hits.slice(0,8));
          });
    }, [categoryId]);

    const lazyLoad =(e)=>{
        console.log("scrolled");
        if (count < 4 ) {
            let lazyLoadedProducts = allProduct.slice(0, 8*(count+1));
            setCount(count+1);
            console.log("testing");
            setProducts(lazyLoadedProducts);
        }
        return;
    }

    const sortProducts = (type)=>{
        console.log("monkey is dancing");
        setSortOrder(type);
        setProducts(sortData(products, type));
    }
    function sortData(data, type){
        let sortedProducts = data.slice().sort((a, b) => a.minPrices - b.minPrices);
        console.log(sortedProducts)
        if(type){
            sortedProducts = sortedProducts.reverse();
        }
        return sortedProducts;
    }

    const fliterByCategoryGender = (gender)=>{
        let filteredData =[];
        axios.get(endPoints.products+"/"+categoryId).then(function(res){
            filteredData = res.data.hits;
            if(gender !=="All"){
                filteredData = filteredData.filter(item => item.c_gender === gender);
            }
            //maintain current sorting
            let sortedFilterData = sortOrder!=='' ? sortData(filteredData, sortOrder) : filteredData;
            setProducts(sortedFilterData);
        });
    }

    return (
        <div className="d-md-flex">
            <div className="filters left-side d-none d-md-flex">
                <Filters filters = {filters} filterBygender = {fliterByCategoryGender}/>
            </div>
            <div className="d-flex flex-column">
                <Sorting sortingData = {sortingOptions} click={sortProducts}/>
                {products.length ? <div className="card-group allproducts" onScroll ={(e)=>lazyLoad(e)}>{products.map((item,index)=>{
                    return(
                    <ProductCard key ={index} product ={item}/>
                )})}</div>: <Spinner/>}
            </div>
        </div>
    )
}

export default PLP
