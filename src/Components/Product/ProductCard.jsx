import React, { useContext } from 'react'
import classes from './Product.module.css'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import {Link} from 'react-router-dom'
import {Rating} from '@mui/material'
import { DataContext } from '../DataProvider/DataProvider'
import {Type} from '../../Utility/action.type'


function ProductCard( {product,flex,renderDescription,renderAdd}) {
  const {image, title, id, rating, price, description }= product;
 
  const [state,dispatch]=useContext(DataContext)

  const addToCart = ()=>{
    dispatch({
        type:Type.ADD_TO_BASKET,
        item:{
            image, title, id, rating, price,description
        }
    })
  }



  return (
    <>
      <div
        className={`${classes.card_container}`}
      >
        <Link to={`/products/${id}`}>
          <img src={image}alt="" className={classes.img_container}/>
        </Link>
        <div>
          <h3 className="">{title}</h3>
          {renderDescription && (
            <div>
              <p className="">{description}</p>
            </div>
          )}
          <div>
            <Rating value={rating?.rate}precision={0.1}/>
            {/* rating count */}
            <small>{rating?.count}</small>
          </div>
          <div className="">
            <CurrencyFormat amount={price}/>
          </div>
          {renderAdd && <button className={`${classes.button}`} onClick={addToCart}>add to cart</button>}
        </div>
      </div>
    </>
  );


 
    
   
       
  
}

export default ProductCard