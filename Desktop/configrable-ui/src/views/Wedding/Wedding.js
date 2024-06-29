import React from 'react';
import { weddingCakes,theme } from './../../data';
import ShopCards from './../../components/ShopCards/ShopCards';
import "./Wedding.css"
import Footer from "./../../components/Footer/Footer"
import { footerData, navData } from './../../data';
import Navbar from '../../components/Navbar/Navbar';

function Wedding() {
  return (<>
  <div 
  style={{
    backgroundColor: theme.backgroundColor1,
    backgroundImage: theme.backgroundImage1
    }}>
      <Navbar logo={navData.logo} links={navData.links} />
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
    
    <div className="App">
      <Footer
        address={footerData.address}
        contact={footerData.contact}
        socialLinks={footerData.socialLinks}
        copyright={footerData.copyright}
      />
    </div>
    </div>
    </>
  )
}

export default Wedding;
