import React ,{useState, useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
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
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        axios.get(endPoints.products+"/"+categoryId).then(function(res){
            console.log("monkey got the data", res.data);
            setSortingOptions(res.data.sortingOptions);
            setFilters(res.data.refinements);
            setProducts(res.data.hits);
          });
    }, [categoryId]);

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
        console.log("printing", gender);
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
                {products.length ? <div className="card-group allproducts">{products.map((item,index)=>{return(
                    <ProductCard key ={index} product ={item}/>
                )})}</div>: <Spinner/>}
            </div>
            
            
        </div>
    )
}

export default PLP
