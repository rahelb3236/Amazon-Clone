import React from 'react'
import classes from './Category.module.css'
import {Link} from 'react-router-dom'

function CategoryCard({data}) {
  // console.log(data) //*16{ title: 'Jewelery' , name : 'jewelery',  imgLink: 'https://m.media-amazon.com/images/I/71r' }
  return (
    <div className={ classes.Category}>
<Link to={`/category/${data?.name}`} alt="">
    <span>
        <h2>{data?.title}</h2>
    </span>
    <img src={data?.imgLink} alt="" />
    <p>shop now</p>
</Link>


    </div>
  )
}

export default CategoryCard