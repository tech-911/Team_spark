import React from "react";
import "./catalouge-list.styles.scss";
import First from "../../assets/catalogue-list/1.png";
import Second from "../../assets/catalogue-list/2.png";
import Third from "../../assets/catalogue-list/3.png";
import Forth from "../../assets/catalogue-list/4.png";

import Header from "../../Components/Header/header.components";
import { Link } from "react-router-dom";
function CatalogueList() {
  return (
    <div>
      <Header />
      <div className="catalogue-list">
        <div>
          <img id="size" src={First} alt="" />
          <Link to="/catalogue" id="catList-link">
            <p>De Manuel</p>
          </Link>
        </div>
        <div>
          <img id="size" src={Second} alt="" />
          <Link to="/second" id="catList-link">
            <p>Green Lodge</p>
          </Link>
        </div>
        <div>
          <img id="size" src={Third} alt="" />
          <Link to="/third" id="catList-link">
            <p>Ultimate Lodge</p>
          </Link>
        </div>
        <div>
          <img id="size" src={Forth} alt="" />
          <Link to="/forth" id="catList-link">
            <p>Compton Lodge</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CatalogueList;
