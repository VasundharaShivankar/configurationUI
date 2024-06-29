import React from 'react';
import "./Home.css"
import Footer from "./../../components/Footer/Footer"
import { footerData, navData} from './../../data';
import themeHome from "./../../data"
import Navbar from '../../components/Navbar/Navbar';
import "./../../index"

const Home = ({ themeHome, welcome, featuredCakes, reviews }) => {
  return (<>
 <Navbar logo={navData.logo} links={navData.links} />

    <div className="home" style={themeHome.container}>
      <section className="welcome-section" style={themeHome.welcomeSection}>
        <h1 style={themeHome.welcomeTitle}>{welcome.title}</h1>
        <p style={themeHome.welcomeText}>{welcome.text}</p>
      </section>

      <section className="featured-cakes-section" style={themeHome.featuredCakesSection}>
        <h2 style={themeHome.featuredCakesTitle}>Featured Cakes</h2>
        <div className="cakes">
          {featuredCakes.map((cake, index) => (
            <div key={index} className="cake" style={themeHome.cake}>
              <img src={cake.image} alt={cake.name} style={themeHome.cakeImage} />
              <h3 style={themeHome.cakeName}>{cake.name}</h3>
              <p style={themeHome.cakeDescription}>{cake.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-section" style={themeHome.reviewsSection}>
        <h2 style={themeHome.reviewsTitle}>Customer Reviews</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {reviews.map((review, index) => (
            <div key={index} className="review" style={themeHome.review}>
              <h3 style={themeHome.reviewName}>{review.name}</h3>
              <p style={themeHome.reviewText}>{review.text}</p>
              <span style={themeHome.reviewRating}>{review.rating} stars</span>
            </div>
          ))}
        </div>
      </section>
    </div>
    <div className="App">
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
