import React from 'react'
import logo from '../assets/logo.png';
import chef from "../assets/chef.png"

function HomePage() {
  return (
    <div className='home_container'>
        <div className="header_section">Stay updated with the latest restaurants and maximize your dining experience with our platform.</div>
        <div className="navbar_section">
            <div className="logo_container">
                <img src={logo} alt="logo" />
            </div>
            <div className="items_section">
                <ul className='items_group'>
                    <li className='items'>Find Restaurants</li>
                    <li className='items'>Locations</li>
                    <li className='items'>Reservations</li>
                    <li className='items'>Special Menus</li>
                    <li className='items'>Restaurant Management Software</li>
                    <li className='items'>Services</li>
                    <button >My Bookings</button>
                </ul>
            </div>
        </div>

        <div className="hero_section">
            <div className="hero_chef">
                <div className="hero_details">
                    <h4>Skip the wait! Reserve Online</h4>
                    <h1>Table <span style={{color: "#2AA7FF"}}>Reservation</span></h1>
                    <p>Connect instantly with our platform to reserve tables at your favorite restaurants.</p>
                    <button>Find Restaurants</button>
                </div>
                <div className="hero_chef_image">
                    <img src={chef} alt="chef" />
                </div>
            </div>
            <div className='search_feature'>
                
            </div>
        </div>
    </div>
  )
}

export default HomePage