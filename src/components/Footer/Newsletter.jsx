import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="app_newsletter">
      <div className="app_newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext_cormorant">Subscribe to Our Newsletter</h1>
        <p className="p_opensans">And never miss latest Updates!</p>
      </div>
      <div className="app_newsletter-input flex_center">
        <input type="email" placeholder="Enter your e-mail address" />
        <button className="custom_button">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
