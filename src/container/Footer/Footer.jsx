import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Newsletter } from "../../components";
import images from "../../constants/images";
import "./Footer.css";

const Footer = () => (
  <div className="app_footer section_padding">
    <Newsletter />

    <div className="app_footer-links">
      <div className="app_footer-links_contact">
        <h1 className="app_footer-headtext">Contact US</h1>
        <p className="p_opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p_opensans">+1 212-344-1230</p>
        <p className="p_opensans">+1 212-555-1230</p>
      </div>
      <div className="app_footer-links_logo">
        <img src={images.gericht} alt="gericht" />
        <p className="p_opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon_img"
          style={{ marginTop: 15}}
        />
        <div className="app_footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app_footer-links_work">
        <h1 className="app_footer-headtext">Working Hours</h1>
        <p className="p_opensans">Monday-Friday:</p>
        <p className="p_opensans">08:00 am -12:00 am</p>
        <p className="p_opensans">Saturday-Sunday:</p>
        <p className="p_opensans">07:00am -11:00 pm</p>
      </div>
    </div>
    <div className="footer_copyright">
      <p className="p_opensans">2023 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
