import React, { useEffect } from 'react';
import Zoom from 'react-reveal/Zoom';
import useWebAnimations, { bounce, rubberBand } from "@wellyshen/use-web-animations";
import Reveal from 'react-reveal/Reveal';
import ScrollAnimation from 'react-animate-on-scroll';

const MainSection = () => {
  const { ref, playState, getAnimation, animate } = useWebAnimations
    ({
      keyframes: [

        { transform: 'translate(0px)' },
        { transform: 'translate(-10px)' },
      ],
      timing: {
        delay: 20,
        duration: 500,
        iterations: Infinity,
        direction: "alternate",
        easing: "linear",
      },
    }, [])

  useEffect(() => {
    document.addEventListener("click", (e) => {
      // The target will follow the mouse cursor
      animate({
        keyframes: [
          { transform: 'translate(0px)' },
          { transform: 'translate(-40px)' },
        ],
        timing: { duration: 500, direction: "alternate", fill: "forwards", iterations: Infinity },
      });
    });
  }, [animate]);
  return (
    <div>

      <section class="products" >
        <div class="product-card" >
          <ScrollAnimation animateIn='fadeIn'>
            <div class="globalanimate"  >
              <div><img src="./images/net1.png" height="30%" width="30%" ref={ref} /></div>
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
      </section>
    </div>
  )
}
export default MainSection
