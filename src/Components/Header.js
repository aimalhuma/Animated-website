import React from 'react'
import Zoom from 'react-reveal/Zoom';

const Header = () => {

    return (
        <div>

            <section class="products" >

                {/* <!-- It's likely you'll need to link the card somewhere. You could add a button in the info, link the titles, or even wrap the entire card in an <a href="..."> -->
*/}
                <div class="product-card" >

                    <div class="product-image"  >
                       


                    </div>
                    <div> <div class="product-image">


                    </div>
                        <div class="product-info">
                        <h1>animate</h1>
                            <h5>Winter Jacket</h5>
                            <h6>$99.99</h6>
                        </div>
                    </div>
                </div>

                {/* <!-- more products --> */}

            </section>
        </div>
    )
}

export default Header
