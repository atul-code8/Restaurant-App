import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./Header.css";

const Header = () => {
  return (
    <div className="app_header app_wrapper section_padding" id="home">
      <div className="app_wrapper_info">
        <SubHeading title="Chase to new flavour" />
        <h1 className="app_header-h1">The Key to Fine Dining</h1>
        <p className="p_opensans" style={{margin: '2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button className="custom_button">Explore Menu</button>
      </div>
      <div className="app_wrapper_img">
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  );
};

export default Header;
