import React, { useState } from 'react'
import classes from "./Results.module.css";
import LayOut from '../../Components/LayOut/LayOut'
import{useParams} from 'react-router-dom'
import axios  from 'axios'
import {Producturl} from '../../API/endpoints'
import { useEffect } from 'react';
import ProductCard from '../../Components/Product/ProductCard'
function Results() {
   
  const [results,setResults] = useState([]);
  const {categoryName} = useParams();
  console.log(categoryName);

useEffect(() => {
    
  axios.get( `${Producturl}/products/category/${categoryName}` )
  .then( 
    (res) => setResults(res.data)
  )
  .catch(
    err => console.log(err)
  )
}, [categoryName]);

//   console.log(result);
  return(
    <LayOut> 
 <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDescription={false}
                renderAdd={true}
              />
            ))}
          </div>
      </section>
    </LayOut>
  )
}

export default Results