import React from "react";
import FpImage1 from "../../assets/fp1.jpg";
import FpImage2 from "../../assets/fp2.jpg";
import FpImage3 from "../../assets/fp3.jpg";
import FpImage4 from "../../assets/fp4.jpg";
import "./FeatureProperties.css";

const FeatureProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={FpImage1} alt="" className="fpImage" />
        <span className="fpName">ApartHotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting From 120$</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={FpImage2} alt="" className="fpImage" />
        <span className="fpName">Staring Stare Akasto</span>
        <span className="fpCity">Barcelona</span>
        <span className="fpPrice">Starting From 900$</span>
        <div className="fpRating">
          <button>9.0</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={FpImage3} alt="" className="fpImage" />
        <span className="fpName">Burj Sheikh Stare Miasto</span>
        <span className="fpCity">UK</span>
        <span className="fpPrice">Starting From 220$</span>
        <div className="fpRating">
          <button>9.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={FpImage4} alt="" className="fpImage" />
        <span className="fpName">Glamorus Stare Miasto</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting From 100$</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureProperties;
