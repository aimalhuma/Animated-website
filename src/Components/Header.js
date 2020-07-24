import React, { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import useWebAnimations, { bounce, rubberBand } from "@wellyshen/use-web-animations";
import Reveal from 'react-reveal/Reveal';
import ScrollAnimation from 'react-animate-on-scroll';

const Header = () => {
  const { ref, playState, getAnimation, animate } = useWebAnimations
    ({
      keyframes: [

       
        { transform: 'rotate(360deg)' },
        { transform: 'rotate(0deg)' },
      ],
      timing: {
        delay: 0, 
        duration: 3500, 
        iterations: Infinity, 
         direction: "reverse", 
        easing: "linear", 
      },
    }, [])
  useEffect(() => {
    document.addEventListener("click", (e) => {

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
        <div class="Headermainstyle" >
        <h1 >We’re moving the industry forward, </h1>
                <h2 class="Headertex">and people notice.</h2>     
          <div class="mobileanimate"  >
          <div ref={ref}><img src="./images/ani5.png" height="36%" width="23%" />
          <img src="./images/icon2.png" height="36%" width="23%" /></div>  
          </div>
          </div>
      </section>
    </div>
  )
}

export default Header
