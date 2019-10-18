import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-col-01">
        <div className="footer-title">
          <p>PROPERTY360</p>
        </div>
        ABOUT US
        <br />
        CAREERS
      </div>
      <div className="footer-col-02">
        <p>
          Made with <FavoriteBorderIcon />
        </p>

        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default Footer;
