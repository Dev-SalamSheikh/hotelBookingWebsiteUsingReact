import React from "react";
import { MdLocationPin } from "react-icons/md";
import Image1 from "../assets/fp1.jpg";
import Image2 from "../assets/fp2.jpg";
import Image3 from "../assets/fp3.jpg";
import Image4 from "../assets/fp4.jpg";
import Image5 from "../assets/hotel.jpg";
import Image6 from "../assets/villa.jpg";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MailList from "../components/Mail List/MailList";
import Navbar from "../components/Navbar/Navbar";
import "./Hotel.css";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="slider"></div>
        <div className="hotelWrapper">
          <button className="bookNow">Reserved or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <MdLocationPin />
            <span>Elton ST 125 New York</span>
          </div>
          <span className="hotelDistance">
            Exellent Location - 500m from Center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $124 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            <div className="hotelImageWrapper">
              <img src={Image1} alt="" className="hotelImage" />
            </div>
            <div className="hotelImageWrapper">
              <img src={Image2} alt="" className="hotelImage" />
            </div>
            <div className="hotelImageWrapper">
              <img src={Image3} alt="" className="hotelImage" />
            </div>
            <div className="hotelImageWrapper">
              <img src={Image4} alt="" className="hotelImage" />
            </div>
            <div className="hotelImageWrapper">
              <img src={Image5} alt="" className="hotelImage" />
            </div>
            <div className="hotelImageWrapper">
              <img src={Image6} alt="" className="hotelImage" />
            </div>
          </div>
          <div className="hotelDeatils">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt nemo odit, quo rem nisi in vero incidunt expedita
                cupiditate atque qui dolore animi libero quos nihil iure debitis
                veniam ipsum ullam ducimus accusantium accusamus at non ipsa?
                Natus velit officia ad possimus. Blanditiis, sequi quos et aut
                voluptates expedita amet. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nesciunt nemo odit, quo rem nisi in vero
                incidunt expedita cupiditate atque qui dolore animi libero quos
                nihil iure debitis veniam ipsum ullam ducimus accusantium
                accusamus at non ipsa? Natus velit officia ad possimus.
                Blanditiis, sequi quos et aut voluptates expedita amet.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h2>Perfect for 9-night stay!</h2>
              <span>
                Lcoated in the real heart of krakow, this property has an
                excellent location score of 9.8
              </span>
              <h3>
                <b>$956</b> (9 Nights)
              </h3>
              <button>Reserved Aor Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
