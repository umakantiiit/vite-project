import { Button } from "bootstrap"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"

const Header = () => {
  return (
    <div className="header">
            <div className="logo-container">
              <img className="logo"
                src="https://images-platform.99static.com//Ba6VdSQsbU4OpiyQEzLi7yHy9KQ=/440x521:1494x1575/fit-in/500x500/99designs-contests-attachments/127/127439/attachment_127439993"
                alt="foodclix" 
             />
            </div>
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
              </ul>
            </div>
    </div>



  )
}

const Body = () => {
  return(
    <div className="body">

      <div className="search">Search </div>
        <div className="res-container">
           <RestaurantCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/3617e91feb8c3c3e81338228a70a9ab5"  resName="MAHARAJA FAST FOOD" cuisine="Biryani,North indian" star="4.8" ETA="30 minutes"/>
           <RestaurantCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/df3487e521860573ece814bfc8c5adf6" resName="ABHI BHAI FAST FOODS" cuisine="Pizza,Fast FOOD" star="4.9" ETA="20 minutes"/>
           <RestaurantCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/zyrpvjiurfsemifg2bkk"resName="PIZZA HUT" cuisine="Pizza,North indian" star="4.2" ETA="40 minutes"/>
           <RestaurantCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/a543ae4aba2319e3c3ced8d8f0787350" resName="SAHOO BIRYANI" cuisine="Biryani,North indian" star="4.0" ETA="20 minutes"/>
           <RestaurantCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/f3af98ce11d80da1de65c039d5701eb7"resName="KBR ROLL AND ROLLS" cuisine="Panipuri,chaat" star="4.3" ETA="10 minutes"/>
           <RestaurantCard img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/vbkeehrcedavaprw3h7s"resName="Micheal Kitchen" cuisine="Dosa,Breakfast" star="4.2" ETA="15 minutes"/>
           


        </div>

      



    </div>


  )
}












function App() {
  

  return (
    <div className='app'>

      <Header/>
      <Body />
      <RestaurantCard />
      
    </div>
  )
}

export default App
