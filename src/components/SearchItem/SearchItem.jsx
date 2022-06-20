import React from "react";
import Image from "../../assets/hotel.jpg";
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={Image} alt="" className="siImage" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from Center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
          Studio Appartment WIth Air Conditions
        </span>
        <span className="siFeatures">
          Entire Studio + 1 Bathroom + 21m One Full Bed
        </span>
        <span className="siFreeCancelOp">Free Cancellation</span>
        <span className="siFreeCancelOpSubtitle">
          You Can Cancel Leter, so Lock in this Great Price Today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">123$</span>
          <span className="siTaxOp">Includes Taxes and Fees</span>
          <button className="siCheckButton">See Availbility</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
