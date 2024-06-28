import React from 'react';
import { birthdayCakes, theme } from './../../data';
import ShopCards from './../../components/ShopCards/ShopCards';
import "./Birthday.css"

function Birthday() {
    return (<>
        <div
            style={{
                backgroundColor: theme.backgroundColor1,
                backgroundImage: theme.backgroundImage1,
            }}>
            <h1 className="page-title">Birthday Cakes</h1>
            <div className="products-container"
            >
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

                        return (
                            <ShopCards
                                key={i}
                                id={id}
                                img={img}
                                title={title}
                                description={description}
                                price={price}
                                productDetails={productDetails}
                            />
                        )
                    })
                }
            </div>
            </div>

        </>
        )
}

        export default Birthday
