import React from "react";
import Header from "../../Components/Header/header.components";
import "./catalogue.styles.scss";
import left from "../../assets/lodges images/left.png";
import right from "../../assets/lodges images/right.png";
import One from "../../assets/lodges images/1a.jpeg";
import two from "../../assets/lodges images/11.jpeg";
import three from "../../assets/lodges images/22.jpeg";
import four from "../../assets/lodges images/33.jpeg";
import five from "../../assets/lodges images/44.jpeg";
import border from "../../assets/border.png";
import mapIcon from "../../assets/google map.jpg";
import { Link } from "react-router-dom";
import frontLogo from "../../assets/De'manuels lodge.png"
function Catalogue() {
  return (
    <div className="catalogue">
      <Header />
      <div className="first-catalogue">
        <img src={frontLogo} alt="" />
      </div>
      <div className="apartment-image">
        <img id="left" src={left} alt="" />
        <img id="styled-image" src={One} alt="" />
        <img id="styled-image" src={two} alt="" />
        <img id="styled-image" src={three} alt="" />
        <img id="styled-image" src={four} alt="" />
        <img id="styled-image" src={five} alt="" />
        <img id="left" src={right} alt="" />
      </div>
      <div className="description">
        <div className="description-left-item">
          <h4>Luxry in Climax</h4>
          <h1>GUEST ROOMS</h1>
          <img id="description-image" src={border} alt="" />
          <p>
            Tastefully furnished selfcon in a serene environment of dama.
            Adequate power supply Well landscaped Green areas Spacious room
            Standby generator Private transformer Property details Type: A room
            selfcontain. Market status : 5 rooms available
          </p>
        </div>

        <div className="description-right-item">
          <h1>Locate</h1>
          <Link to="/Google">
            <img src={mapIcon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
