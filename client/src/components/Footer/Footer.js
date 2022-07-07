import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { CustomButton } from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe Now to stay up-to-date on content
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <CustomButton
          sx={{
            color: "#fff",
            fontSize: "1.5rem",
            borderRadius: "3rem",
          }}
          variant="contained"
          size="large"
        >
          Subscribe Now
        </CustomButton>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Reviews</Link>
            <Link to="/">Careers</Link>

            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Appearances</Link>
            <Link to="/">Bovada</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Network</h2>
            <Link to="/">SEC</Link>
            <Link to="/">CBB</Link>
            <Link to="/">BIG12</Link>
            <Link to="/">MLB</Link>
            <Link to="/">DRAFT</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/">
              <HeadphonesIcon />
            </Link>
            <Link to="/">
              <InstagramIcon />
            </Link>
            <Link to="/">
              <FacebookIcon />
            </Link>
            <Link to="/">
              <YouTubeIcon />
            </Link>
            <Link to="/">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
