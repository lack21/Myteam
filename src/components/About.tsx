import nikitaImage from "../assets/avatar-nikita.jpg";
import christianImage from "../assets/avatar-christian.jpg";
import cruzImage from "../assets/avatar-cruz.jpg";
import drakeImage from "../assets/avatar-drake.jpg";
import griffinImage from "../assets/avatar-griffin.jpg";
import adenImage from "../assets/avatar-aden.jpg";
import crossIcon from "../assets/icon-cross.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import linkedinIcon from "../assets/icon-linkedin.svg";
import vergeLogo from "../assets/logo-the-verge.png";
import jakartaLogo from "../assets/logo-jakarta-post.png";
import guardianLogo from "../assets/logo-the-guardian.png";
import techradarLogo from "../assets/logo-tech-radar.png";
import gadgetsLogo from "../assets/logo-gadgets-now.png";
import { useState } from "react";

function About() {
  const [isFirstFlipped, setIsFirstFlipped] = useState(false);
  const [isSecondFlipped, setIsSecondFlipped] = useState(false);
  const [isThirdFlipped, setIsThirdFlipped] = useState(false);
  const [isFourthFlipped, setIsFourthFlipped] = useState(false);
  const [isFifthFlipped, setIsFifthFlipped] = useState(false);
  const [isSixthFlipped, setIsSixthFlipped] = useState(false);

  return (
    <>
      <header className="header sub-header">
        <h1 className="title">About</h1>
        <p className="text">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We'll bring those teams to you.
        </p>
      </header>

      <section className="staff">
        <h2 className="heading">Meet the directors</h2>
        <div className="row">
          <div className={`item ${isFirstFlipped ? "active" : ""}`}>
            <div className="front-side">
              <img src={nikitaImage} alt="nikita" />
              <h3 className="name">Nikita Marks</h3>
              <h4 className="profession">Founder & CEO</h4>
            </div>
            <div className="back-side">
              <h3 className="name">Nikita Marks</h3>
              <p className="text">
                “It always amazes me how much talent there is in every corner of
                the globe.”
              </p>
              <div className="social-icons">
                <img src={twitterIcon} alt="twitter-icon" />
                <img src={linkedinIcon} alt="linkedin-icon" />
              </div>
            </div>
            <button
              className="btn"
              onClick={() => setIsFirstFlipped(!isFirstFlipped)}
            >
              <img src={crossIcon} alt="cross-icon" />
            </button>
          </div>
          <div className={`item ${isSecondFlipped ? "active" : ""}`}>
            <div className="front-side">
              <img src={christianImage} alt="christian" />
              <h3 className="name">Christian Duncan</h3>
              <h4 className="profession">Co-founder & COO</h4>
            </div>
            <div className="back-side">
              <h3 className="name">Christian Duncan</h3>
              <p className="text">
                “Distributed teams required unique processes. You need to
                approach work in a new way.”
              </p>
              <div className="social-icons">
                <img src={twitterIcon} alt="twitter-icon" />
                <img src={linkedinIcon} alt="linkedin-icon" />
              </div>
            </div>
            <button
              className="btn"
              onClick={() => setIsSecondFlipped(!isSecondFlipped)}
            >
              <img src={crossIcon} alt="cross-icon" />
            </button>
          </div>
          <div className={`item ${isThirdFlipped ? "active" : ""}`}>
            <div className="front-side">
              <img src={cruzImage} alt="cruz" />
              <h3 className="name">Cruz Hamer</h3>
              <h4 className="profession">Co-founder & CTO</h4>
            </div>
            <div className="back-side">
              <h3 className="name">Cruz Hamer</h3>
              <p className="text">
                “Technology is at the forefront of enabling distributed teams.
                That's where we come in.”
              </p>
              <div className="social-icons">
                <img src={twitterIcon} alt="twitter-icon" />
                <img src={linkedinIcon} alt="linkedin-icon" />
              </div>
            </div>
            <button
              className="btn"
              onClick={() => setIsThirdFlipped(!isThirdFlipped)}
            >
              <img src={crossIcon} alt="cross-icon" />
            </button>
          </div>
          <div className={`item ${isFourthFlipped ? "active" : ""}`}>
            <div className="front-side">
              <img src={drakeImage} alt="drake" />
              <h3 className="name">Drake Heaton</h3>
              <h4 className="profession">Business Development Lead</h4>
            </div>
            <div className="back-side">
              <h3 className="name">Drake Heaton</h3>
              <p className="text">
                “Hiring similar people from similar backgrounds is a surefire
                way to stunt innovation.”
              </p>
              <div className="social-icons">
                <img src={twitterIcon} alt="twitter-icon" />
                <img src={linkedinIcon} alt="linkedin-icon" />
              </div>
            </div>
            <button
              className="btn"
              onClick={() => setIsFourthFlipped(!isFourthFlipped)}
            >
              <img src={crossIcon} alt="cross-icon" />
            </button>
          </div>
          <div className={`item ${isFifthFlipped ? "active" : ""}`}>
            <div className="front-side">
              <img src={griffinImage} alt="griffin" />
              <h3 className="name">Griffin Wise</h3>
              <h4 className="profession">Lead Marketing</h4>
            </div>
            <div className="back-side">
              <h3 className="name">Griffin Wise</h3>
              <p className="text">
                “Unique perspectives shape unique products, which is what you
                need to survive these days.”
              </p>
              <div className="social-icons">
                <img src={twitterIcon} alt="twitter-icon" />
                <img src={linkedinIcon} alt="linkedin-icon" />
              </div>
            </div>
            <button
              className="btn"
              onClick={() => setIsFifthFlipped(!isFifthFlipped)}
            >
              <img src={crossIcon} alt="cross-icon" />
            </button>
          </div>
          <div className={`item ${isSixthFlipped ? "active" : ""}`}>
            <div className="front-side">
              <img src={adenImage} alt="aden" />
              <h3 className="name">Aden Allan</h3>
              <h4 className="profession">Head of Talent</h4>
            </div>
            <div className="back-side">
              <h3 className="name">Aden Allan</h3>
              <p className="text">
                “Empowered teams create truly amazing products. Set the north
                star and let them follow it.”
              </p>
              <div className="social-icons">
                <img src={twitterIcon} alt="twitter-icon" />
                <img src={linkedinIcon} alt="linkedin-icon" />
              </div>
            </div>
            <button
              className="btn"
              onClick={() => setIsSixthFlipped(!isSixthFlipped)}
            >
              <img src={crossIcon} alt="cross-icon" />
            </button>
          </div>
        </div>
      </section>

      <section className="clients">
        <h2 className="heading">Some of our clients</h2>
        <div className="row">
          <img src={vergeLogo} alt="verge-logo" />
          <img src={jakartaLogo} alt="jakarta-logo" />
          <img src={guardianLogo} alt="guardian-logo" />
          <img src={techradarLogo} alt="techradar-logo" />
          <img src={gadgetsLogo} alt="gadgets-logo" />
        </div>
      </section>
    </>
  );
}

export default About;
