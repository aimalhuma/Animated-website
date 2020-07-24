import React, { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import useWebAnimations, { bounce, rubberBand } from "@wellyshen/use-web-animations";
import Reveal from 'react-reveal/Reveal';
import ScrollAnimation from 'react-animate-on-scroll';
import Flip from 'react-reveal/Flip';

const MainSection = () => {
  const { ref, playState, getAnimation, animate } = useWebAnimations
    ({
      keyframes: [

         {transform: 'translate(0px)'},
        {transform: 'translate(-10px)'},
        // {transform: 'translate(-5px)'},

      ],
      timing: {
        delay: 20, // Start with a 500ms delay
        duration: 500, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "linear", // Use a fancy timing function


      },
    }, [])

  useEffect(() => {
    document.addEventListener("click", (e) => {
      // The target will follow the mouse cursor
      animate({
        keyframes: [

          {transform: 'translate(0px)'},
          {transform: 'translate(-40px)'},
       


        ],
        timing: { duration: 500,  direction: "alternate", fill: "forwards" },
      });
    });
  }, [animate]);




  return (
    <div>

      <section class="products" >

        {/* <!-- It's likely you'll need to link the card somewhere. You could add a button in the info, link the titles, or even wrap the entire card in an <a href="..."> -->
*/}
        <div class="product-card" >
        <ScrollAnimation animateIn='fadeIn'>
          <div class="globalanimate"  >
          <div><img src="./images/net1.png"   height="30%" width="30%" ref={ref} /></div>  
          </div></ScrollAnimation>
          <div> <div class="product-image">


          </div>
            <div class="product-info" >
            <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
                  <h1 className='Headertex' >Insights</h1>
                <h5>If we’re not learning, we’re not leading. 
                 <h2> We’re obsessed with new ways to transform old paradigms, </h2>
                 <h2 >explore the latest industry trends, and celebrate the</h2>
                   kind of future-forward thought leadership that can help 
                   you accelerate your brand and make impactful decisions.</h5>
               
                </ScrollAnimation>
            </div>
          </div>
        </div>

        {/* <!-- more products --> */}

      </section>
    </div>
  )
}

export default MainSection
