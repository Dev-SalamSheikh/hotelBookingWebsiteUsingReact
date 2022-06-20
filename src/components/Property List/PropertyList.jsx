import React from "react";
import Appartment from "../../assets/apartment.jpg";
import Cabin from "../../assets/cabins.jpg";
import Hotels from "../../assets/hotel.jpg";
import Resort from "../../assets/resort.jpg";
import Villa from "../../assets/villa.jpg";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={Hotels} alt="" className="pListImage" />
        <div className="pTitles">
          <h1 className="pTitle">Hotels</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Appartment} alt="" className="pListImage" />
        <div className="pTitles">
          <h1 className="pTitle">Hotels</h1>
          <h2>2331 Hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Cabin} alt="" className="pListImage" />
        <div className="pTitles">
          <h1 className="pTitle">Cabins</h1>
          <h2>2100 Cabins</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Villa} alt="" className="pListImage" />
        <div className="pTitles">
          <h1 className="pTitle">Villa</h1>
          <h2>250 Villa</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={Resort} alt="" className="pListImage" />
        <div className="pTitles">
          <h1 className="pTitle">Resort</h1>
          <h2>970 Resort</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
