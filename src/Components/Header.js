import React, { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import useWebAnimations, { bounce, rubberBand } from "@wellyshen/use-web-animations";
import Reveal from 'react-reveal/Reveal';
import ScrollAnimation from 'react-animate-on-scroll';

const Header = () => {
  const { ref, playState, getAnimation, animate } = useWebAnimations
    ({
      keyframes: [

        // {transform: 'translate(0px)'},
        // {transform: 'translate(-0px)'},
        // {transform: 'translate(-5px)'},
        { transform: 'rotate(360deg)' },
        { transform: 'rotate(0deg)' },

      ],
      timing: {
        delay: 0, // Start with a 500ms delay
        duration: 3500, // Run for 1000ms
        iterations: Infinity, // Repeat once
         direction: "reverse", // Run the animation forwards and then backwards
        easing: "linear", // Use a fancy timing function


      },
    }, [])


  useEffect(() => {
    document.addEventListener("click", (e) => {
      // The target will follow the mouse cursor
      animate({
        keyframes: [

          { transform: 'rotate(360deg)' },
          { transform: 'rotate(0deg)' },
       


        ],
        timing: { duration: 3500, fill: "forwards",iterations: 2, },
      });
    });
  }, [animate]);




  return (
    <div>

      <section class="products" >

        {/* <!-- It's likely you'll need to link the card somewhere. You could add a button in the info, link the titles, or even wrap the entire card in an <a href="..."> -->
*/}
        <div class="Headermainstyle" >
        <h1 >We’re moving the industry forward, </h1>
                <h2 class="Headertex">and people notice.</h2>
               
          <div class="mobileanimate"  >
         
          <div ref={ref}><img src="./images/ani5.png" height="36%" width="23%" />
          <img src="./images/icon2.png" height="36%" width="23%" /></div>  
         
          </div>
          
               
            
          </div>
       

        {/* <!-- more products --> */}

      </section>
    </div>
  )
}

export default Header
