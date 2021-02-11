import React from 'react';
import {NavLink} from "react-router-dom";
import style from './ProductsOffer.module.css';

const ProductsOffer = props => {

    const products = props.array
    const productsList = products.map((product, index) =>
        <NavLink key={index} to={'/'} className={style.productItem}>
            <img key={index+1} className={`${style.featuresItem__icon + index} ${style.featuresItem__icon}`} src={product.img} alt={product.productDescription}/>
            <h2 key={index+2} className={style.featuresItem__title}>{product.productTitle}</h2>
            <p key={index+3} className={style.featuresItem__desc}>{product.productDescription}</p>
        </NavLink>
    )

  return (
   <section className={style.features}>
       <h2 className={style.features__title}>{props.title}</h2>
       <h3 className={style.features__subtitle}>{props.subtitle}</h3>
       <div className={style.features__wrapper}>
           {productsList}
       </div>

   </section>
  );
 }


export default ProductsOffer;