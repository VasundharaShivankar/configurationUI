import React from 'react';
import { birthdayCakes } from './../../data';
import ShopCards from '../../components/ShopCards/ShopCards';
import "./Home.css"
import Footer from "./../../components/Footer/Footer"
import { footerData } from './../../data';

function Home() {
  return (<>
    <h1 className="page-title">Birthday Cakes</h1>
    <div className="products-container">
      {
        birthdayCakes.map((productData, i) => {
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
      {/* Other components */}
      <Footer
        address={footerData.address}
        contact={footerData.contact}
        socialLinks={footerData.socialLinks}
        copyright={footerData.copyright}
      />
    </div>
    </>
  )
}


export default Home;
