import React from "react";
import Feature from "../../components/Feature/Feature";
import FeatureProperties from "../../components/FeatureProperties/FeatureProperties";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MailList from "../../components/Mail List/MailList";
import Navbar from "../../components/Navbar/Navbar";
import PropertyList from "../../components/Property List/PropertyList";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Feature />
        <h1 className="homeTitle">Browse The Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes Guest Love</h1>
        <FeatureProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
