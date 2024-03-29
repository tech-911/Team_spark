import React from "react";
import "./catalouge-list.styles.scss";
import First from "../../assets/catalogue-list/1.png";
import Second from "../../assets/catalogue-list/2.png";
import Third from "../../assets/catalogue-list/3.png";
import Forth from "../../assets/catalogue-list/4.png";


import Header from "../../Components/Header/header.components";
import { Link } from "react-router-dom";
import Fift from "../../assets/catalogue-list/5a.jpg";
import Sixth from "../../assets/catalogue-list/6a.jpg";
import Seventh from "../../assets/catalogue-list/7a.jpg";
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
            <p>Vatican City Lodge</p>
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
            <p>Nasruj Lodge</p>
          </Link>
        </div>
        <div>
          <img id="size" src={Fift} alt="" />
          <Link to="/fifth" id="catList-link">
            <p>ASG Lodge</p>
          </Link>
        </div>
        <div>
          <img id="size" src={Sixth} alt="" />
          <Link to="/sixth" id="catList-link">
            <p>Salvation Lodge</p>
          </Link>
        </div>
        <div>
          <img id="size" src={Seventh} alt="" />
          <Link to="/seventh" id="catList-link">
            <p>Horizon Lodge</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CatalogueList;
