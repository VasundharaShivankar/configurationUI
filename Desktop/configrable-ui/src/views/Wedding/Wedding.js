import React from 'react';
import { weddingCakes,theme } from './../../data';
import ShopCards from './../../components/ShopCards/ShopCards';
import "./Wedding.css"

function Wedding() {
  return (<>
  <div 
  style={{
    backgroundColor: theme.backgroundColor1,
    backgroundImage: theme.backgroundImage1
    }}>
    <h1 className="page-title" >Wedding Cakes</h1>
    <div className="products-container">
      {
        weddingCakes.map((productData, i) => {
          const {
            id,
            title,
            img,
            description,
            price,
            productDetails
          } = productData

          return (<ShopCards
            key={i}
            id={id}
            img={img}
            title={title}
            description={description}
            price={price}
            productDetails={productDetails}
          />)
        })
      }
    </div>
    </div>
    </>
  )
}

export default Wedding;
