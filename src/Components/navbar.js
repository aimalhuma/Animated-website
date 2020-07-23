import React from 'react'
// import './App.css'
import useWebAnimations ,{bounce,rubberBand}from "@wellyshen/use-web-animations";

const Navbar = () => {
  const { ref, playState, getAnimation } = useWebAnimations({...bounce})
  return (
    <nav class="product-filter" >

        <h1 ref={ref}>Build Your Website</h1>
        {/* <span class="animated bounce"></span> */}
      
        <div class="sort">
      
          <div class="collection-sort">
            <label>Filter by:</label>
            <select>
              <option value="/">All Jackets</option>
            </select>
          </div>
      
          <div class="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
            </select>
          </div>
      
        </div>
      
      </nav>
  )
}

export default Navbar

