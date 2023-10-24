import React from 'react'
import  './Product.css';
import axios from 'axios';
const Product = ({img,title,desc,price,_id,p}) => {
 async function add_to_cart(_id){
 
       try{
        const p = await axios.get(`http://localhost:8080/api/v1/products/${_id}`);
       const c = await axios.post('http://localhost:8080/api/v1/cart',p.data);

 
       }
       catch(err){
        console.log(err);
       }
  }
  return (
   <div className='outer_card'>
    <img src={img} alt="" />
    <div className='card_detail'>
        <h3>{title}</h3>
        <p>{desc} </p>
    </div>
    <div className='price_btn'>
        <h5>Rs {price}</h5>
        <button onClick={()=>add_to_cart(_id)}>Add to Cart</button>
    </div>
   </div>
  )
}

export default Product