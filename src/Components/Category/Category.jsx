import React from 'react'
import{ CategoryInfos} from "./CategoryFullInfos"
import CategoryCard from './CategoryCard'
import Classes from './Category.module.css/'

function Category() {
  return (
    <div>
<section className={ Classes.Category_Container}>
    {
CategoryInfos.map((infos,index) =>(
<CategoryCard  key = {index} data = {infos}/>
))
}
</section>





    </div>
  )
}

export default Category