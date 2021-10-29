import React from "react";
import Header from "../../Components/Header/header.components";
import "./forth-lodge.styles.scss";
import mapIcon from "../../assets/google map.jpg";
import { Link } from "react-router-dom";
import frontLogo from "../../assets/Nasruj Lodge.png";
import payStack from "../../assets/paystack.jpeg";
function Forth() {
  return (
    <div className="forth">
      <Header />
      <div className="forth-top">
        <img src={frontLogo} alt="" />
      </div>
      <div className="description">
        <div className="description-first-item">
          <div className="number-remaining">
            <h1>Available Room</h1>
            <p>6 bedrooms</p>
          </div>
          <div className="features">
            <h1>Features</h1>
            <h4>
              Brand new
              <br />
              Secured environment
              <br />
              Spacious compound
              <br />
              24hrs security
              <br />
              Standby generator
              <br />
              Private transformer
            </h4>
          </div>
        </div>

        <img src={payStack} alt="" />
      </div>
      <div className="sub-description">
        <div className="description-right-item">
          <Link to="/GoogleForth">
            <img src={mapIcon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Forth;
