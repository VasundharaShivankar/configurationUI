import React from 'react'
import "./ShopCards.css"
import { Link } from "react-router-dom"
import {theme} from "./../../data"

function ShopCards({ id, img, title , price, productDetails }) {
  return (<>
    <Link className="product-cards" to={`/blog/${id}`} >
    <div
    style={{
      backgroundImage: 
      id === "100" || id === "200" || id === "300" || id === "400" || id === "500" || id === "600"
      ? theme.backgroundImage2
      : theme.backgroundImage1,
      backgroundSize: 'cover',
    }}>
      <img src={img} alt="product-img" className="product-img" />
      <h1 className="product-title">{title}</h1>
      <div className='main-content'>
      <div className="price">
        <span className='product-price'>Price: {price}</span>
      </div>
      <p className="cake-content"><b>Flavour:</b> {productDetails.flavour}</p>
      <p className="cake-content"><b>Cake Type:</b> {productDetails.typeOfCake}</p>
      <p className="cake-content"><b>Size:</b> {productDetails.size}</p>
      </div>
      </div>
    </Link>
  </>
  )
}

export default ShopCards
