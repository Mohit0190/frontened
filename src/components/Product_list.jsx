import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios';

const Product_list = () => {
    const [product,setproduct]= useState([]);
    const getProducts = async()=>{
        try {
            const res = await axios.get('http://localhost:8080/api/v1/products');
            setproduct(res.data)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
     getProducts();
    },[])
  return (
    product.map((p,id)=>{
        return(
             <Product key={id} p={p} title={p.title} desc={p.description} img={p.thumbnail} price={p.price} _id={p._id} />
            
        )
    })
  )
}

export default Product_list