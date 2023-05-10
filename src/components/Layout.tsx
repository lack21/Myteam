import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import logoImage from "../assets/logo.svg";
import facebookImage from "../assets/icon-facebook.svg";
import pinterestImage from "../assets/icon-pinterest.svg";
import twitterImage from "../assets/icon-twitter.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";

function Layout() {
  const [isLinksActive, setIsLinksActive] = useState(false);

  function ToggleLinks() {
    setIsLinksActive(!isLinksActive);
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/Myteam">
          <img src={logoImage} alt="logo" className="logo" />
        </Link>
        <div className={`links ${isLinksActive ? "active" : ""}`}>
          <Link className="link" to="/Myteam">
            home
          </Link>
          <Link className="link" to="about">
            about
          </Link>
          <Link className="btn" to="contact">
            contact us
          </Link>
        </div>
        <img
          src={isLinksActive ? closeIcon : hamburgerIcon}
          alt="links-btn"
          className="links-btn"
          onClick={ToggleLinks}
        />
      </nav>

      <Outlet />

      <aside className="banner">
        <h2 className="heading">Ready to get started?</h2>
        <Link className="btn" to="contact">
          contact us
        </Link>
      </aside>

      <footer className="footer">
        <div className="left-side">
          <img src={logoImage} alt="logo" className="logo" />
          <div className="bottom-content">
            <Link className="link" to="/Myteam">
              home
            </Link>
            <Link className="link" to="about">
              about
            </Link>
          </div>
        </div>
        <div className="center">
          <p className="text">987 Hillcrest Lane</p>
          <p className="text">Irvine, CA</p>
          <p className="text">California 92714</p>
          <p className="text">Call Us : 949-833-7432</p>
        </div>
        <div className="right-side">
          <div className="social-icons">
            <img src={facebookImage} alt="facebook-icon" />
            <img src={pinterestImage} alt="pinterest-icon" />
            <img src={twitterImage} alt="twitter-icon" />
          </div>
          <p className="text">Copyright 2020. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
