import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature">
      <div className="featureItem">
        <img src={image1} alt="dublinImage" className="featureImg" />
        <div className="featureTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featureItem">
        <img src={image2} alt="dublinImage" className="featureImg" />
        <div className="featureTitles">
          <h1>Austin</h1>
          <h2>532 Properties</h2>
        </div>
      </div>
      <div className="featureItem">
        <img src={image3} alt="dublinImage" className="featureImg" />
        <div className="featureTitles">
          <h1>Reno</h1>
          <h2>433 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Feature;
